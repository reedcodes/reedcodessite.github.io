---
permalink: "/blog/tag/{{ tag | slug }}/"
layout: layouts/default.njk
eleventyNavigation:
  key: Tags
  parent: Blog
pagination:
  data: collections
  size: 1
  alias: tag
  filter: [
    "all",
    "guide",
    "blogPosts",
    "blogPostsFirst",
    "categories",
    "categoryList",
    "tagList"
  ]
---
