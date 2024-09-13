# JPage - ![npm](https://img.shields.io/npm/v/jpage?style=flat-square&label=version) ![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/jpage?style=flat-square) ![NPM](https://img.shields.io/npm/l/jpage?style=flat-square)

JPage is a JavaScript plugin for creating websites as slides.

## Get started
To use JPage in your project, you must add to it:

**CSS:**
```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.min.css"
/>
```

**JavaScript:**
```html
<script
  src="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.min.js"
  type="module"
></script>
```
> replace {version} with the desired version (you can consult all versions of JPage by [clicking here](https://www.npmjs.com/package/jpage?activeTab=versions)).

**NOTE:**  if you don’t want to use CDN in your project, you can download JPage and use it directly by [clicking here](https://github.com/pedro-isacss/jpage/archive/refs/heads/master.zip).

## Basic usege
Creating websites as slides is as simple as:

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
  const jpageConfig = {} // Object to configure JPage
</script>
```

To learn more about JPage see the [documentation](https://jpage.pedroisac.dev/).

## Licence
JPage is [MIT licensed](https://github.com/pedro-isacss/jpage/blob/master/LICENSE).
