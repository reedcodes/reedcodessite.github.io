module.exports = function( eleventyConfig ) {

  // Navigation.
  // Requires 11ty to use Nunjucks.

  const eleventyNavigationPlugin = require( '@11ty/eleventy-navigation' );
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configuration.

  return {
    templateFormats: ['html', 'njk'],

    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'html',

    dir: {
      data: '_data',
      layouts: '_layouts',
      includes: '_includes',
      output: '_sites'
    }
  };
};
