import Scroller from "./scripts/scroller.js";
import Slider from "./scripts/slider.js";
import Menu from "./scripts/menu.js"
import jpageConfigDefault from "./scripts/jpageConfigDefault.js"

try {
  if (jpageConfig) {
    // Scroller
    const scroller = new Scroller({ ...jpageConfigDefault.scroller, ...jpageConfig.scroller });
    scroller.createScroll();

    // Slider
    const sliders = document.querySelectorAll(".jpage .section .slider");
    const slider = new Slider({ ...jpageConfigDefault.slider, ...jpageConfig.slider })
    slider.createSlider(sliders)

    // Menu
    const menu = new Menu({ ...jpageConfigDefault.menu, ...jpageConfig.menu })
    menu.createMenu()
  }
} catch (e) {
  throw new Error(e.message)
}