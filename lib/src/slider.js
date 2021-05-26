// Current slid
function activeSlide(children, indexChildren, open) {
  children[indexChildren].classList.add("active-slide");
  children.forEach((item, itemIndex) => {
    itemIndex !== open ? item.classList.remove("active-slide") : null;
  });
}

// Create sliders
export const createSlider = (sliders) => {
  sliders.forEach((slider) => {
    let openSlide = 0;
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
      if (openSlide > 0) openSlide--;
      slider.scrollTo({
        left:
          [...slider.children][openSlide].getBoundingClientRect().width *
          openSlide,
        behavior: "smooth",
      });
      sliderControl.style.left = `${
        [...slider.children][openSlide].getBoundingClientRect().width *
        openSlide
      }px`;
      navSlider.style.left = `${
        [...slider.children][openSlide].getBoundingClientRect().width *
          openSlide +
        [...slider.children][openSlide].getBoundingClientRect().width / 2
      }px`;
      activeSlide([...navSlider.children], openSlide, openSlide);
    });
    // Next
    right.addEventListener("click", (e) => {
      if (openSlide < [...slider.children].length - 3) openSlide++;
      slider.scrollTo({
        left:
          [...slider.children][openSlide].getBoundingClientRect().width *
          openSlide,
        behavior: "smooth",
      });
      sliderControl.style.left = `${
        [...slider.children][openSlide].getBoundingClientRect().width *
        openSlide
      }px`;
      navSlider.style.left = `${
        [...slider.children][openSlide].getBoundingClientRect().width *
          openSlide +
        [...slider.children][openSlide].getBoundingClientRect().width / 2
      }px`;
      activeSlide([...navSlider.children], openSlide, openSlide);
    });
    // Create nav-slider
    navSlider.setAttribute("class", "nav-slider");
    [...slider.children].slice(0, -1).forEach((slide, index) => {
      const button = document.createElement("button");
      if (index === 0) button.classList.add("active-slide");
      button.onclick = () => {
        openSlide = index;
        activeSlide([...navSlider.children], index, openSlide);
        slider.scrollTo({
          left:
            [...slider.children][openSlide].getBoundingClientRect().width *
            openSlide,
          behavior: "smooth",
        });
        navSlider.style.left = `${
          [...slider.children][openSlide].getBoundingClientRect().width *
            openSlide +
          [...slider.children][openSlide].getBoundingClientRect().width / 2
        }px`;
        sliderControl.style.left = `${
          [...slider.children][openSlide].getBoundingClientRect().width *
          openSlide
        }px`;
      };
      navSlider.appendChild(button);
    });
    slider.appendChild(navSlider);
  });
};
