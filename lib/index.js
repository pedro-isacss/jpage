import createScroller from "./scripts/scroller.js";
import createSliders from "./scripts/slider.js";
import jpageConfigDefault from "./scripts/jpageConfigDefault.js";
import "./scripts/jquery.js";

let config;

try {
  config = jpageConfig;
} catch (e) {
  config = {};
}

// === CREATE COMPONENTS ==
createScroller({ ...jpageConfigDefault.scroller, ...config.scroller });
createSliders({ ...jpageConfigDefault.slider, ...config.slider });
