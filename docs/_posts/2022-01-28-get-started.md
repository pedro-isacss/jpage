---
title: Get Started
author: Pedro Isac
date: 2022-01-28
category: JPage
layout: post
---

## Get Started with JPage

To start using JPage, you need to embed the JavaScript and CSS code on your website. You can do this using the jsDelivr CDN as shown below:

**CSS**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.min.css"
/>
```

**JAVASCRIPT**

```html
<script
  src="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.min.js"
  type="module"
></script>
```

> replace {version} with the desired version (you can consult all versions of JPage by [clicking here](https://www.npmjs.com/package/jpage?activeTab=versions)).

## Basic usage

```html
<div class="jpage">
  <div class="section" style="background-color: crimson;">
    <!-- Your content -->
  </div>
  <div class="section">
    <div class="slider">
      <div class="slide" style="background-color: brown;">
        <!-- Your content -->
      </div>
      <div class="slide" style="background-color: dimgray;">
        <!-- Your content -->
      </div>
    </div>
  </div>
</div>
<script>
  const jpageConfig = {}; // Object to configure JPage
</script>
```
