module.exports = function( eleventyConfig ) {

  const eleventyNavigationPlugin = require( '@11ty/eleventy-navigation' );
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configuration.

  return {
    dir: {
      input: 'src',
      data: '_data',
      layouts: '_layouts',
      includes: '_includes',
      output: 'docs'
    }
  };
};
