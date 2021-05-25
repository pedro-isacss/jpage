// Scroller
import { createScroll, navScroll } from "./src/scroller.js";
const fullPageScroller = document.querySelector(".jpage");
const fullPageScrollerSections = document.querySelectorAll(".jpage .section");
createScroll(fullPageScrollerSections);
fullPageScroller.appendChild(navScroll);

// Slider
import { createSlider } from "./src/slider.js";
const sliders = document.querySelectorAll(".jpage .section .slider");
sliders.forEach((slider) => {
  console.log([...slider.children]);
});
const slids = document.querySelectorAll(".jpage .section .slider > *");
createSlider(sliders);
