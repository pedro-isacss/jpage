---
title: Get Started
author: Pedro Isac
date: 2022-01-28
category: JPage
layout: post
---

## JPage with CDN
To use JPage in your project using CDN, you must add to it:

**CSS**
```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.min.css"/>
```

**JAVASCRIPT**
```html
  <script src="https://cdn.jsdelivr.net/npm/jpage@{version}/lib/index.min.js" type="module"></script>
```

> replace {version} with the desired version (you can consult all versions of JPage by [clicking here](https://www.npmjs.com/package/jpage)).

Basic usage:

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

## JPage with React

Install JPage:

```bash
npm i jpage
```

Import CSS and JavaScript do Jpage:

```javascript
import "jpage/lib/index.css"
import("jpage/lib/index.js")
```

If you need to change any default jpage configuration do:

```javascript
useEffect(() => {
  window.jpageConfig = {} // Object to configure JPage
}, [])
```

Basic usage:

```jsx
import { useEffect } from 'react';

import "jpage/lib/index.css"
import("jpage/lib/index.js")

function App() {
  useEffect(() => {
    window.jpageConfig = {} // Object to configure JPage
  }, [])
  return (
    <div className="App">
      <div className="jpage">
        <div className="section" style={{ backgroundColor: "gray" }}></div>
        <div className="section">
          <div className="slider">
            <div className="slide" style={{ backgroundColor: "black" }}></div>
            <div className="slide" style={{ backgroundColor: "blue" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```