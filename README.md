# JPage - ![npm](https://img.shields.io/npm/v/jpage?color=1c2c4d&style=flat-square&label=version) ![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/jpage?color=1c2c4d&style=flat-square) ![NPM](https://img.shields.io/npm/l/jpage?color=1c2c4d&style=flat-square)

![JPage](./jpage-cover.png)

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
> replace {version} with the desired version (you can consult all versions of JPage by [clicking here](https://www.npmjs.com/package/jpage)).

**NOTE:**  if you don’t want to use CDN in your project, you can download JPage and use it directly by [clicking here](https://github.com/pedro-isacss/jpage/archive/refs/heads/master.zip).

## Basic usege
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
<script>
  const jpageConfig = {} // Object to configure JPage
</script>
```

To learn more about JPage see the [documentation](https://pedro-isacss.github.io/jpage/).

## Licence
JPage is [MIT licensed](https://github.com/pedro-isacss/jpage/blob/master/LICENSE).

## Author
Hi, my name is Pedro Isac.

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://mail.google.com/mail/u/0/?to=ss.pedroisac@gmail.com&tf=cm)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://bit.ly/ss_pedroisac)
