// Current slid
function activeSlid(children, indexChildren, open) {
  children[indexChildren].classList.add("active-slid");
  children.forEach((item, itemIndex) => {
    itemIndex !== open ? item.classList.remove("active-slid") : null;
  });
}

// Create sliders
export const createSlider = (sliders) => {
  sliders.forEach((slider) => {
    let openSlid = 0;
    const navSlider = document.createElement("div");
    // Right and left buttons
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
    // Back
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
      navSlider.style.left = `${
        [...slider.children][openSlid].getBoundingClientRect().width *
          openSlid +
        [...slider.children][openSlid].getBoundingClientRect().width / 2
      }px`;
      activeSlid([...navSlider.children], openSlid, openSlid);
    });
    // Next
    right.addEventListener("click", (e) => {
      if (openSlid < [...slider.children].length - 3) openSlid++;
      slider.scrollTo({
        left:
          [...slider.children][openSlid].getBoundingClientRect().width *
          openSlid,
        behavior: "smooth",
      });
      sliderControl.style.left = `${
        [...slider.children][openSlid].getBoundingClientRect().width * openSlid
      }px`;
      navSlider.style.left = `${
        [...slider.children][openSlid].getBoundingClientRect().width *
          openSlid +
        [...slider.children][openSlid].getBoundingClientRect().width / 2
      }px`;
      activeSlid([...navSlider.children], openSlid, openSlid);
    });
    // Create nav-slider
    navSlider.setAttribute("class", "nav-slider");
    [...slider.children].slice(0, -1).forEach((slid, index) => {
      const button = document.createElement("button");
      if (index === 0) button.classList.add("active-slid");
      button.onclick = () => {
        openSlid = index;
        activeSlid([...navSlider.children], index, openSlid);
        slider.scrollTo({
          left:
            [...slider.children][openSlid].getBoundingClientRect().width *
            openSlid,
          behavior: "smooth",
        });
        navSlider.style.left = `${
          [...slider.children][openSlid].getBoundingClientRect().width *
            openSlid +
          [...slider.children][openSlid].getBoundingClientRect().width / 2
        }px`;
        sliderControl.style.left = `${
          [...slider.children][openSlid].getBoundingClientRect().width *
          openSlid
        }px`;
      };
      navSlider.appendChild(button);
    });
    slider.appendChild(navSlider);
  });
};
