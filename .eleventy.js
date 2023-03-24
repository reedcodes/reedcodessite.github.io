// Import the 11ty navigation plugin. This requires Nunjucks.
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Import metagen plugin. This allows for easy includes for website meta
// information, such as js and css assets, OpenGraph, and more.
const eleventyMetagenPlugin = require("eleventy-plugin-metagen");

// Import the favicon plugin.
const eleventyFaviconsPlugin = require("eleventy-plugin-gen-favicons");

// Import 11ty RSS plugin.
const eleventyRssPlugin = require("@11ty/eleventy-plugin-rss");

// Import the syntax highlighting (PrismJS) plugin.
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Import additional markdown libraries.
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");



module.exports = function( eleventyConfig ) {

  /*
   * Pass through copy.
   * This function sends assets from the source directory to the generated
   * output build. This can include files such as images or dependencies.
   * The input is relative to your project root, and the output is relative
   * to the generated site root, i.e. the `output` attribute that is defined
   * below, in the 11ty configuration options.
   * More info: https://www.11ty.dev/docs/copy/
   */

  eleventyConfig.addPassthroughCopy( {
    // Copy over local site assets. This is usually images used globally across
    // the entire site, e.g. logos or profile photos.
    "./node_modules/@fortawesome/fontawesome-free/webfonts/": "dist/webfonts/fa/",
    "./source/_images/": "dist/images/"
  } );

  // Add the 11ty nav plugin. This creates an 11ty navigation based on pages
  // in a collection.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add the metagen plugin. This creates a "meta" shortcode with options for
  // meta information, css and js links, and social info such as OpenGraph and
  // Twitter.
  eleventyConfig.addPlugin(eleventyMetagenPlugin);

  // Add the favicon plugin.
  eleventyConfig.addPlugin(eleventyFaviconsPlugin, {
    "outputDir": "./site"
  });

  // Add the 11ty RSS plugin. This creates a feed that can then be available
  // for audience to subscribe to the blog in their favorite reader.
  eleventyConfig.addPlugin(eleventyRssPlugin, {
    posthtmlRenderOptions: {
      quoteStyle: 0
    }
  });

  eleventyConfig.addFilter( "getNewestCollectionItemDate", eleventyRssPlugin.getNewestCollectionItemDate );
  eleventyConfig.addFilter( "dateToRfc822", eleventyRssPlugin.dateToRfc822 );

  // Add the syntax highlighting plugin. This adds a color-coded theme to code
  // blocks on pages and posts.
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["njk", "md"],
    preAttributes: {
      "data-language": function({ language, content, options }) {
        return language;
      }
    }
  });

  // Update the markdown library.
  // markdownIt().use(markdownItAttrs);

  const markdownOptions = {
    html: true
  };
  
  const markdownLibrary = markdownIt(markdownOptions)
    .use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Add blog glob. This assists in pulling in various collections in the blog,
  // such as posts, categories, and tags.
  eleventyConfig.addCollection( "blogPosts", require("./source/_config/collections/blog-posts.js") );
  eleventyConfig.addCollection( "categories", require("./source/_config/collections/categories.js") );
  eleventyConfig.addCollection( "categoryList", require("./source/_config/collections/category-list.js") );
  eleventyConfig.addCollection( "tagList", require("./source/_config/collections/tag-list.js") );

  // Add date filters to make it a little easier to write dates.
  eleventyConfig.addFilter( "simpleDate", require("./source/_config/filters/simple-date.js") );
  eleventyConfig.addFilter( "shortDate", require("./source/_config/filters/short-date.js") );
  eleventyConfig.addFilter( "longDate", require("./source/_config/filters/long-date.js") );

  // Add the image shortcode, from the 11ty image plugin.
  eleventyConfig.addAsyncShortcode( "image", require("./source/_config/shortcodes/image.js") );

  // Remove the console output of all generated files.
  eleventyConfig.setQuietMode(true);

  // 11ty config options.
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: 'source',
      data: '_data',
      includes: '_includes',
      output: 'site'
    }
  };
};
