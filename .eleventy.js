module.exports = function( eleventyConfig ) {
  
  // Liquid options.
  let liquidJs = require( "liquidjs" );
  let options = {
    extname:         ".liquid",
    dynamicPartials: true
  };
  eleventyConfig.setLibrary( "liquid", liquidJs( options ) );
  
  // Eleventy options.
  return {
    dir: {
      output:   "site",
      includes: "_includes",
      layouts:  "_layouts"
    }
  };
};
