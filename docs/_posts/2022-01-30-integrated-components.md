---
title: Integrated Components
author: Psoft
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

Use the jpageConfig object to customize the After Sections component:

```html
<script>
  scroller: {
    afterSections: {
      menuVisible: false, // if the menu is visible in the after sections component 
    }
  }
</script>
```

<iframe height="390" style="width: 100%;" scrolling="no" title="JPage - After Sections" src="https://codepen.io/ss-pedroisac/embed/MWOoRpm?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ss-pedroisac/pen/MWOoRpm">
  JPage - After Sections</a> by Pedro Isac (<a href="https://codepen.io/ss-pedroisac">@ss-pedroisac</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

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
      buttonIconToClose: "x", // button content when menu is open
      buttonIconToOpen: "o" // button content when the menu is closed
    }
  }
</script>
```

<iframe height="390" style="width: 100%;" scrolling="no" title="JPage - After Sections" src="https://codepen.io/ss-pedroisac/embed/ExbXJJd?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ss-pedroisac/pen/ExbXJJd">
  JPage - After Sections</a> by Pedro Isac (<a href="https://codepen.io/ss-pedroisac">@ss-pedroisac</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>