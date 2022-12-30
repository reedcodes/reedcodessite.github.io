---
title: Blog
permalink: "blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
layout: default
eleventyNavigation:
  key: Blog
  order: 3
pagination:
  data: collections.blogPosts
  size: 10
post_title_heading: h2
---
