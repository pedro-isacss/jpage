---
title: Scroller and Slider
author: Pedro Isac
date: 2022-01-29
category: JPage
layout: post
---

Scroller and Slider are the two main components of JPage. The Scroller is responsible for the vertical scroll. The Slider is responsible for the horizontal scroll.

## Scroller

The Scroller is made up of sections. Therefore, to create a scroller just add the ***section*** class to a container:

```html
<div class="section"> <!-- Your content --> </div>
```

Configuring the Scroller:

```javascript
const jpageConfigDefault = {
  scroller: {
    showControls: true, // whether controls should be shown or not (default is true)
  },
}
```

## Slider

The Slider is formed by slides and is inside a section of the Scroller. So, to create a Slider just do:

```html
<div class="section">
  <div class="slider">
    <div class="slide"> <!-- Your content --> </div>
    <div class="slide"> <!-- Your content --> </div>
  </div>
</div>
```

Configuring the Slider:

```javascript
const jpageConfigDefault = {
  slider: {
    showControls: true, // whether controls should be shown or not (default is true)
  },
}
```