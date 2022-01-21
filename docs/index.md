---
layout: default
---

## 1 - About
JPage is a JavaScript plugin for creating websites as slides. It is an [open source project](https://github.com/pedro-isacss/jpage) and It is [MIT licensed](https://github.com/pedro-isacss/jpage/blob/master/LICENSE).

* * *

## 2 - Get Started
To use JPage in your project, you must add to it:

**CSS**
```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.css"/>
```

**JAVASCRIPT**
```html
  <script src="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.js" type="module"></script>
```

> replace {version} with the desired version (you can consult all versions of JPage by [clicking here](https://www.npmjs.com/package/jpage)).

**NOTE:** if you don't want to use CDN in your project, you can download JPage and use it directly by clicking on the download buttons available in the header.

* * *

## 3 - Basic usage
Creating websites as slides is as simple as:

```html
<div class="jpage">
  <div class="section" style="background-color: crimson;"> <!-- Your content --> </div>
  <div class="section">
    <div class="slider">
      <div class="slide" style="background-color: brown;"> <!-- Your content --> </div>
      <div class="slide" style="background-color: dimgray;"> <!-- Your content --> </div>
    </div>
  </div>
</div>
```