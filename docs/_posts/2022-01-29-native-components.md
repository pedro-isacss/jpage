---
title: Native Components
author: Pedro Isac
date: 2022-01-28
category: JPage
layout: post
---

JPage also offers some native components that you can repurpose.

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

Use the jpageConfig object to customize the menu

```html
<script>
  const jpageConfig = {
    menu: {
      buttonIconToClose: "x",   // button content when menu is open
      buttonIconToOpen: "o"   // button content when the menu is closed
    }
  }
</script>
```