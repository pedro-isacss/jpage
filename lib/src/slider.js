// Variables
// let openSlid = 0;
// let openSlider = 0;

// Create sliders
export const createSlider = (sliders, slids) => {
  sliders.forEach((slider) => {
    let openSlid = 0;
    const sliderControl = document.createElement("div");
    const left = document.createElement("button");
    const right = document.createElement("button");
    left.classList.add("left-slider-btn");
    right.classList.add("right-slider-btn");
    sliderControl.classList.add("slider-control");
    left.innerHTML =
      "<img src='https://cdn.jsdelivr.net/npm/jpage/lib/src/icons/arrow-left.svg' />";
    right.innerHTML =
      "<img src='https://cdn.jsdelivr.net/npm/jpage/lib/src/icons/arrow-right.svg' />";
    sliderControl.append(left, right);
    slider.appendChild(sliderControl);
    left.addEventListener("click", (e) => {
      if (openSlid > 0) openSlid--;
      slider.scrollTo({
        left:
          [...slider.children][openSlid].getBoundingClientRect().width *
          openSlid,
        behavior: "smooth",
      });
      sliderControl.style.left = `${
        [...slider.children][openSlid].getBoundingClientRect().width * openSlid
      }px`;
    });
    right.addEventListener("click", (e) => {
      if (openSlid < 2) openSlid++;
      slider.scrollTo({
        left:
          [...slider.children][openSlid].getBoundingClientRect().width *
          openSlid,
        behavior: "smooth",
      });
      sliderControl.style.left = `${
        [...slider.children][openSlid].getBoundingClientRect().width * openSlid
      }px`;
    });
  });
};
