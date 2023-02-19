export default class Slider {
  constructor(sliderConfig) {
    this.sliderConfig = sliderConfig
    this.ts_x;
    this.ts_y;
    this.mouseInitX = 0;
    this.mouseDown = false;
  }

  activeSlide(children, indexChildren, open) {
    if (this.sliderConfig.showControls === true) {
      children[indexChildren].classList.add("active-slide");
      children.forEach((item, itemIndex) => {
        itemIndex !== open ? item.classList.remove("active-slide") : null;
      });
    }
  }

  updateSectionWhenResize(slider, openSlide) {
    window.addEventListener("resize", function () {
      slider.scrollTo({
        left:
          [...slider.children][openSlide].getBoundingClientRect().width *
          openSlide,
      });
    });
  }

  updateSectionWhenTouch(slider, openSlide, navSlider) {
    slider.addEventListener("touchstart", (e) => {
      this.ts_x = e.touches[0].clientX;
      this.ts_y = e.touches[0].clientY;
    });
    slider.addEventListener("touchend", (e) => {
      const td_x = e.changedTouches[0].clientX - this.ts_x;
      const td_y = e.changedTouches[0].clientY - this.ts_y;
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
          this.activeSlide([...navSlider.children], openSlide, openSlide);
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
          this.activeSlide([...navSlider.children], openSlide, openSlide);
        }
      }
    });
  }

  updateSectionWhenMouseDrag(slider, openSlide, navSlider, resetKeyDown) {
    slider.addEventListener("mousedown", (e) => {
      this.mouseInitX = e.pageX;
      this.mouseDown = true;
    });

    slider.addEventListener("mousemove", (e) => {
      if (this.mouseDown) {
        if (
          openSlide + 1 <= [...slider.children].length - 2 &&
          this.mouseInitX > e.pageX
        ) {
          slider.scrollTo({
            left:
              window.innerWidth * (openSlide + 1) +
              this.mouseInitX -
              e.pageX -
              window.innerWidth,
          });
        } else if (openSlide - 1 >= 0 && this.mouseInitX < e.pageX) {
          slider.scrollTo({
            left:
              window.innerWidth * (openSlide - 1) -
              e.pageX +
              this.mouseInitX +
              window.innerWidth,
          });
        }
      }
    });
    slider.addEventListener("mouseup", (e) => {
      if (e.pageX < this.mouseInitX && openSlide < [...slider.children].length - 2) {
        openSlide++;
        slider.scrollTo({
          left:
            [...slider.children][openSlide].getBoundingClientRect().width *
            openSlide,
          behavior: "smooth",
        });
      } else if (e.pageX > this.mouseInitX && openSlide > 0) {
        openSlide--;
        slider.scrollTo({
          left:
            [...slider.children][openSlide].getBoundingClientRect().width *
            openSlide,
          behavior: "smooth",
        });
      }
      this.activeSlide([...navSlider.children], openSlide, openSlide);
      this.mouseDown = false;
      this.updateSectionWhenKeydown(slider, openSlide, navSlider)
    });
  }

  updateSectionWhenKeydown(slider, openSlide, navSlider) {
    window.addEventListener("keyup", (e) => {
      if (
        slider.getBoundingClientRect().top === 0
      ) {
        if (e.code === "ArrowRight") {
          if (openSlide < [...slider.children].length - 2) openSlide++;
          else if (openSlide === [...slider.children].length - 2) openSlide = 0;
          slider.scrollTo({
            left:
              window.innerWidth *
              openSlide,
            behavior: "smooth",
          });
          this.activeSlide([...navSlider.children], openSlide, openSlide);
        } else if (e.code === "ArrowLeft") {
          if (openSlide > 0) openSlide--;
          slider.scrollTo({
            left:
              [...slider.children][openSlide].getBoundingClientRect().width *
              openSlide,
            behavior: "smooth",
          });
          this.activeSlide([...navSlider.children], openSlide, openSlide);
        }
        this.updateSectionWhenMouseDrag(slider, openSlide, navSlider)
      }
    });
  }

  createSlider(sliders) {
    sliders.forEach((slider) => {
      let openSlide = 0;
      const navSlider = document.createElement("div");
      this.updateSectionWhenResize(slider, openSlide, navSlider)
      this.updateSectionWhenTouch(slider, openSlide, navSlider)
      this.updateSectionWhenMouseDrag(slider, openSlide, navSlider)
      this.updateSectionWhenKeydown(slider, openSlide, navSlider)
      navSlider.setAttribute("class", "nav-slider");
      if (this.sliderConfig.showControls === true) {
        [...slider.children].forEach((slide, index) => {
          const button = document.createElement("button");
          if (index === 0) button.classList.add("active-slide");
          button.onclick = () => {
            openSlide = index;
            this.activeSlide([...navSlider.children], index, openSlide);
            slider.scrollTo({
              left:
                [...slider.children][openSlide].getBoundingClientRect().width *
                openSlide,
              behavior: "smooth",
            });
            this.updateSectionWhenResize(slider, openSlide, navSlider)
            this.updateSectionWhenTouch(slider, openSlide, navSlider)
            this.updateSectionWhenMouseDrag(slider, openSlide, navSlider)
            this.updateSectionWhenKeydown(slider, openSlide, navSlider)
          };
          navSlider.appendChild(button);
        });
      }
      slider.appendChild(navSlider);
    });
  }
}
