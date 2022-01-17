import Scroller from "./scripts/scroller.js";
import Slider from "./scripts/slider.js";

if (jpageConfig.pageType === "jpage-default") {
  // Scroller
  const scroller = new Scroller();
  scroller.createScroll();
  // Slider
  const sliders = document.querySelectorAll(".jpage .section .slider");
  const slider = new Slider()
  slider.createSlider(sliders, scroller.getOpenSection);
} else if (jpageConfig.pageType === "jpage-one-slider") {
  // jpage-one-slider
  const sliders = document.querySelectorAll(".jpage .section .slider")[0];
  const slider = new Slider()
  slider.createSlider([sliders], () => 0);
}
