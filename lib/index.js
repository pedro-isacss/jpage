// FULL PAGE SCROLLER
const fullPageScroller = document.querySelector(".jpage");
const fullPageScrollerSections = document.querySelectorAll(".jpage .section");
const heightScreen = window.screen.height;
let currentSection = 0;
let lastScroll = 0;

fullPageScrollerSections.forEach((section, index) => {
  if (index === 0) section.style.display = "flex";
  else section.style.display = "none";
  section.style.height = "100vh";
  section.style.width = "100%";
});

function show(current) {
  currentSection = current;
  fullPageScrollerSections.forEach((section, index) => {
    if (index === current) {
      fullPageScrollerSections[index].style.display = "flex";
    } else {
      fullPageScrollerSections[index].style.display = "none";
    }
  });
}

const toolBar = document.createElement("div");
fullPageScrollerSections.forEach((section, index) => {
  const button = document.createElement("button");
  button.style.width = "16px";
  button.style.height = "16px";
  button.style.borderRadius = "20px";
  button.style.margin = "4px 0";
  button.style.backgroundColor = "white";
  button.onclick = () => show(index);
  toolBar.appendChild(button);
});
toolBar.style.position = "absolute";
toolBar.style.right = "24px";
toolBar.style.display = "flex";
toolBar.style.flexDirection = "column";
fullPageScroller.appendChild(toolBar);
fullPageScroller.style.display = "flex";
fullPageScroller.style.justifyContent = "center";
fullPageScroller.style.alignItems = "center";

window.addEventListener("scroll", (e) => {
  if (this.scrollY < lastScroll) {
    currentSection--;
    window.scroll(0, heightScreen * currentSection);
    console.log("subiu");
  } else if (this.scrollY > lastScroll) {
    currentSection++;
    window.scroll(0, heightScreen * currentSection);
    console.log("desceu");
  }
  console.log("scroll");
  lastScroll = this.scrollY;
});
