import Scroller from "./scripts/scroller.js";
// import Slider from "./scripts/slider.js";
// import Menu from "./scripts/menu.js"
import jpageConfigDefault from "./scripts/jpageConfigDefault.js"
import "./scripts/jquery.js"

let config

try {
  config = jpageConfig
} catch (e) {
  config = {}
}


// Scroller
Scroller({ ...jpageConfigDefault.scroller, ...config.scroller });

// Slider
// const sliders = document.querySelectorAll(".jpage .section .slider");
// const slider = new Slider({ ...jpageConfigDefault.slider, ...config.slider })
// slider.createSlider(sliders)

// // Menu
// const menu = new Menu({ ...jpageConfigDefault.menu, ...config.menu })
// menu.createMenu()
