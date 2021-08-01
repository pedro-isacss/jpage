// Variables
let ts_x;
let ts_y;

// Functions
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
    // For mobile
    slider.addEventListener("touchstart", (e) => {
      ts_x = e.touches[0].clientX;
      ts_y = e.touches[0].clientY;
    });
    slider.addEventListener("touchend", (e) => {
      var td_x = e.changedTouches[0].clientX - ts_x;
      var td_y = e.changedTouches[0].clientY - ts_y;
      if (Math.abs(td_x) > Math.abs(td_y)) {
        // Drag right
        if (td_x < 0) {
          if (openSlide < [...slider.children].length - 3) openSlide++;
          slider.scrollTo({
            left:
              [...slider.children][openSlide].getBoundingClientRect().width *
              openSlide,
            behavior: "smooth",
          });
          activeSlide([...navSlider.children], openSlide, openSlide);
        }
        // Drag left
        else {
          if (openSlide > 0) openSlide--;
          slider.scrollTo({
            left:
              [...slider.children][openSlide].getBoundingClientRect().width *
              openSlide,
            behavior: "smooth",
          });
          activeSlide([...navSlider.children], openSlide, openSlide);
        }
      }
    });
    // Keyboard
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowRight") {
        if (openSlide < [...slider.children].length - 3) openSlide++;
        slider.scrollTo({
          left:
            [...slider.children][openSlide].getBoundingClientRect().width *
            openSlide,
          behavior: "smooth",
        });
        activeSlide([...navSlider.children], openSlide, openSlide);
      } else if (e.code === "ArrowLeft") {
        if (openSlide > 0) openSlide--;
        slider.scrollTo({
          left:
            [...slider.children][openSlide].getBoundingClientRect().width *
            openSlide,
          behavior: "smooth",
        });
        activeSlide([...navSlider.children], openSlide, openSlide);
      }
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
      };
      navSlider.appendChild(button);
    });
    slider.appendChild(navSlider);
  });
};
