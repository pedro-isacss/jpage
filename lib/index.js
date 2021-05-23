import { createNavControl, navControll } from "./src/navControll.js";

const fullPageScroller = document.querySelector(".jpage");
const fullPageScrollerSections = document.querySelectorAll(".jpage .section");

createNavControl(fullPageScrollerSections);
fullPageScroller.appendChild(navControll);
