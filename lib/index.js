import { createNavControl, navControl } from "./src/navControl.js";

const fullPageScroller = document.querySelector(".jpage");
const fullPageScrollerSections = document.querySelectorAll(".jpage .section");

createNavControl(fullPageScrollerSections);
fullPageScroller.appendChild(navControl);
