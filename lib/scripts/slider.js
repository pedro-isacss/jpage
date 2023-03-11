export default function createSliders(sliderConfig) {
  // === VARIABLES ===
  let ts_x = 0;
  let ts_y = 0;
  let mouseInitX = 0;
  let mouseDown = false;

  //  === ACTIVE SLIDE ===
  function activeSlide(children, indexChildren, open) {
    if (sliderConfig.showControls === true) {
      children[indexChildren].classList.add("active-slide");
      children.forEach((item, itemIndex) => {
        itemIndex !== open ? item.classList.remove("active-slide") : null;
      });
    }
  }

  // === UPDATE SLIDER WHEN RESIZE ===
  function updateSectionWhenResize(slider, openSlide) {
    window.addEventListener("resize", function () {
      slider.scrollTo({
        left:
          [...slider.children][openSlide].getBoundingClientRect().width *
          openSlide,
      });
    });
  }

  // === UPDATE SLIDE WHEN TOUCH ===
  function updateSectionWhenTouch(slider, openSlide, navSlider) {
    slider.addEventListener("touchstart", (e) => {
      ts_x = e.touches[0].clientX;
      ts_y = e.touches[0].clientY;
    });
    slider.addEventListener("touchend", (e) => {
      const td_x = e.changedTouches[0].clientX - ts_x;
      const td_y = e.changedTouches[0].clientY - ts_y;
      if (Math.abs(td_x) > Math.abs(td_y)) {
        // Drag right
        if (td_x < 0) {
          if (openSlide < [...slider.children].length - 2) openSlide++;
          else if (openSlide === [...slider.children].length - 2) openSlide = 0;
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
  }

  // === UPDATE SLIDE WHEN MOUSE DRAG ===
  function updateSectionWhenMouseDrag(slider, openSlide, navSlider) {
    slider.addEventListener("mousedown", (e) => {
      mouseInitX = e.pageX;
      mouseDown = true;
    });

    slider.addEventListener("mousemove", (e) => {
      if (mouseDown) {
        if (
          openSlide + 1 <= [...slider.children].length - 2 &&
          mouseInitX > e.pageX
        ) {
          slider.scrollTo({
            left:
              window.innerWidth * (openSlide + 1) +
              mouseInitX -
              e.pageX -
              window.innerWidth,
          });
        } else if (openSlide - 1 >= 0 && mouseInitX < e.pageX) {
          slider.scrollTo({
            left:
              window.innerWidth * (openSlide - 1) -
              e.pageX +
              mouseInitX +
              window.innerWidth,
          });
        }
      }
    });
    slider.addEventListener("mouseup", (e) => {
      if (e.pageX < mouseInitX && openSlide < [...slider.children].length - 2) {
        openSlide++;
        slider.scrollTo({
          left:
            [...slider.children][openSlide].getBoundingClientRect().width *
            openSlide,
          behavior: "smooth",
        });
      } else if (e.pageX > mouseInitX && openSlide > 0) {
        openSlide--;
        slider.scrollTo({
          left:
            [...slider.children][openSlide].getBoundingClientRect().width *
            openSlide,
          behavior: "smooth",
        });
      }
      activeSlide([...navSlider.children], openSlide, openSlide);
      mouseDown = false;
      // updateSectionWhenKeydown(slider, openSlide, navSlider)
      // console.log(openSlide)
    });
  }

  // === UPDATE SLIDE WHEN KEY DOWN ===
  function updateSectionWhenKeydown(slider, openSlide, navSlider) {
    window.addEventListener("keydown", (e) => {
      if (slider.getBoundingClientRect().top === 0) {
        if (e.code === "ArrowRight") {
          if (openSlide < [...slider.children].length - 2) openSlide++;
          else if (openSlide === [...slider.children].length - 2) openSlide = 0;
          slider.scrollTo({
            left: window.innerWidth * openSlide,
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
        // updateSectionWhenMouseDrag(slider, openSlide, navSlider)
      }
    });
  }

  // === INIT ===
  const sliders = document.querySelectorAll(".jpage .section .slider");
  sliders.forEach((slider) => {
    let openSlide = 0;
    const navSlider = document.createElement("div");
    updateSectionWhenResize(slider, openSlide, navSlider);
    updateSectionWhenTouch(slider, openSlide, navSlider);
    updateSectionWhenMouseDrag(slider, openSlide, navSlider);
    updateSectionWhenKeydown(slider, openSlide, navSlider);
    navSlider.setAttribute("class", "nav-slider");
    if (sliderConfig.showControls === true) {
      [...slider.children].forEach((slide, index) => {
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
          updateSectionWhenResize(slider, openSlide, navSlider);
          updateSectionWhenTouch(slider, openSlide, navSlider);
          updateSectionWhenMouseDrag(slider, openSlide, navSlider);
          updateSectionWhenKeydown(slider, openSlide, navSlider);
        };
        navSlider.appendChild(button);
      });
    }
    slider.appendChild(navSlider);
  });
}
