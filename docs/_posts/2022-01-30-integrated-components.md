---
title: Integrated Components
author: Pedro Isac
date: 2022-01-30
category: JPage
layout: post
---

In addition to Scroller and Slider, JPage also offers some integrated components.

## After Sections

If you need to add additional content but you don't want to use either the Scroller or the Slider, then you can use After Sections.

```html
<div class="jpage">
  <div class="after-sections">
    <!-- Your content here -->
  </div>
</div>
```

> **Important:** add the After Sections component after all sections!

## Menu

You can create a full page menu by doing:

```html
<div class="jpage">
  <div class="menu" style="background-color: yellow;">
    <!-- Menu content here -->
  </div>
  <button id="toggle-menu-btn"></button>
</div>
```

Use the jpageConfig object to customize the menu:

```html
<script>
  const jpageConfig = {
    menu: {
      buttonIconToClose: "x",      // button content when menu is open
      buttonIconToOpen: "o"        // button content when the menu is closed
    }
  }
</script>
```