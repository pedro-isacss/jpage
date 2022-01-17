import Scroller from "./scripts/scroller.js";
import { createSlider } from "./scripts/slider.js";

if (jpageConfig.pageType === "jpage-default") {
  // Scroller
  const scroller = new Scroller();
  scroller.createScroll();
  // Slider
  const sliders = document.querySelectorAll(".jpage .section .slider");
  createSlider(sliders, scroller.getOpenSection());
} else if (jpageConfig.pageType === "jpage-one-slider") {
  // jpage-one-slider
  const sliders = document.querySelectorAll(".jpage .section .slider");
  createSlider(sliders);
}
