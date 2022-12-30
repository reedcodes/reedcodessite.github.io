// Import the 11ty navigation plugin. This requires Nunjucks.
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Import metagen plugin. This allows for easy includes for website meta
// information, such as js and css assets, OpenGraph, and more.
const eleventyMetagenPlugin = require("eleventy-plugin-metagen");

// Import the favicon plugin.
const eleventyFaviconsPlugin = require("eleventy-plugin-gen-favicons");

// Import 11ty RSS plugin.
const eleventyRssPlugin = require("@11ty/eleventy-plugin-rss");



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

  // Remove the console output of all generated files.
  eleventyConfig.setQuietMode(true);

  // 11ty config options.
  return {
    dir: {
      input: 'source',
      data: '_data',
      layouts: '_layouts',
      includes: '_includes',
      output: 'site'
    }
  };
};
