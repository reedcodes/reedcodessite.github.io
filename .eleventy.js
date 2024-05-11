module.exports = function(eleventyConfig) {

  // Add blog glob. This assists in pulling in various collections in the blog,
  // such as posts, categories, and tags.
  eleventyConfig.addCollection( "tagList", require("./source/_config/collections/tags.js") );

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
      output: 'site'
    }
  };
}
