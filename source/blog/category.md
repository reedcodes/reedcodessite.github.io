---
permalink: "/blog/category/{{ categoryName | slug }}/"
layout: layouts/default.njk
eleventyNavigation:
  key: Categories
  parent: Blog
pagination:
  data: collections.categoryList
  size: 1
  alias: categoryName
---
