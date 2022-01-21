import Scroller from "./scripts/scroller.js";
import Slider from "./scripts/slider.js";


// Scroller
const scroller = new Scroller();
scroller.createScroll();
// Slider
const sliders = document.querySelectorAll(".jpage .section .slider");
const slider = new Slider()
slider.createSlider(sliders, scroller)