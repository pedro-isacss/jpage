import { createScroll, navScroll } from "./scripts/scroller.js";
import { createSlider } from "./scripts/slider.js";

if (jpageConfig.pageType === "jpage-default") {
  // Scroller
  document.body.style.overflow = "hidden";
  const fullPageScroller = document.querySelector(".jpage");
  const fullPageScrollerSections = document.querySelectorAll(".jpage .section");
  createScroll(fullPageScrollerSections);
  fullPageScroller.appendChild(navScroll);
  // Slider
  const sliders = document.querySelectorAll(".jpage .section .slider");
  createSlider(sliders, "jpage-default");
} else if (jpageConfig.pageType === "jpage-one-slider") {
  // jpage-one-slider
  const sliders = document.querySelectorAll(".jpage .section .slider");
  createSlider(sliders);
}
