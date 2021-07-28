# JPage ![npm](https://img.shields.io/npm/dt/jpage?color=%23002336) ![npm](https://img.shields.io/npm/v/jpage?color=%23002336) ![NPM](https://img.shields.io/npm/l/jpage?color=%23002336)
Create dynamic, fast and amazing pages 😉

JPage is a template for creating websites where each section occupies the entire screen. In addition to the sections, JPage also offers the "sliders", which are sections with horizontal scroll.

Check out a real example of a website created with JPage by clicking [here🔗](https://pedro-isacss.github.io/jpage/).

## Get started
### CDN
Import JPage JavaScript and CSS into your code. Then replace `{version}` with the desired version.

CSS:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.css">
```
JavaScript:
```html
<script src="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.js" type="module"></script>
```

You can consult all versions of JPage by clicking [here🔗](https://www.npmjs.com/package/jpage).

### Download
You can also download library files by [clicking here](https://downgit.github.io/#/home?url=https://github.com/pedro-isacss/jpage/tree/master/lib).

## Basic usage
```html
<div class="jpage">
  <div class="section" style="background-color: crimson;"></div>
  <div class="section">
    <div class="slider">
      <div class="slide" style="background-color: dimgray;"></div>
      <div class="slide" style="background-color: blueviolet;"></div>
    </div>
  </div>
</div>
```
