---
title: Blog
permalink: "blog{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
layout: layouts/blog.njk
eleventyNavigation:
  key: Blog
  order: 3
pagination:
  data: collections.blogPosts
  size: 10
---
