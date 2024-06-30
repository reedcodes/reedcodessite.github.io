/*
 * 11ty plugins.
 */

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

/*
 * 11ty configurations.
 * This section includes setup for collections, filters, and shortcodes, then
 * returns the 11ty settings.
 */

module.exports = function(eleventyConfig) {

  // Add the 11ty nav plugin. This creates an 11ty navigation based on pages
  // in a collection.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add blog glob. This assists in pulling in various collections in the blog,
  // such as posts, categories, and tags.
  eleventyConfig.addCollection( 'tagList', require('./source/_config/collections/tags.js') );

  // Add date filters to make it a little easier to write dates.
  eleventyConfig.addFilter('dateSimple', require('./source/_config/filters/date-simple.js'));

  // 11ty config options.
  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'source',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
      output: 'site'
    }
  };
}
