import { createScroll, navScroll } from "./scripts/scroller.js";
import { createSlider } from "./scripts/slider.js";

if (!jpageConfig || jpageConfig.typePage === "jpage-default") {
  // Scroller
  document.body.style.overflow = "hidden";
  const fullPageScroller = document.querySelector(".jpage");
  const fullPageScrollerSections = document.querySelectorAll(".jpage .section");
  createScroll(fullPageScrollerSections);
  fullPageScroller.appendChild(navScroll);
  // Slider
  const sliders = document.querySelectorAll(".jpage .section .slider");
  createSlider(sliders);
} else if (jpageConfig.typePage === "jpage-only-slider") {
  // jpage-one-slider
  const sliders = document.querySelectorAll(".jpage .section .slider");
  createSlider(sliders);
}
