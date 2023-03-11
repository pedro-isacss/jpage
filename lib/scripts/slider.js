export default function createSliders(sliderConfig) {
  // === VARIABLES ===
  let ts_x = 0;
  let ts_y = 0;
  let mouseInitX = 0;
  let mouseDown = false;

  // === SLIDE ===
  function slide(slider, open) {
    slider.animate(
      {
        scrollLeft: window.innerWidth * open,
      },
      700
    );
  }

  //  === ACTIVE SLIDE ===
  function activeSlide(children, indexChildren, open) {
    children.eq(indexChildren).addClass("active-slide");
    children.each(function (itemIndex) {
      itemIndex !== open && $(this).removeClass("active-slide");
    });
  }

  // === UPDATE SLIDER WHEN RESIZE ===
  function updateSectionWhenResize(slider, openSlide) {
    // window.addEventListener("resize", function () {
    //   slider.scrollTo({
    //     left:
    //       [...slider.children][openSlide].getBoundingClientRect().width *
    //       openSlide,
    //   });
    // });
  }

  // === UPDATE SLIDE WHEN TOUCH ===
  function updateSectionWhenTouch(slider, openSlide, navSlider) {
    // slider.addEventListener("touchstart", (e) => {
    //   ts_x = e.touches[0].clientX;
    //   ts_y = e.touches[0].clientY;
    // });
    // slider.addEventListener("touchend", (e) => {
    //   const td_x = e.changedTouches[0].clientX - ts_x;
    //   const td_y = e.changedTouches[0].clientY - ts_y;
    //   if (Math.abs(td_x) > Math.abs(td_y)) {
    //     // Drag right
    //     if (td_x < 0) {
    //       if (openSlide < [...slider.children].length - 2) openSlide++;
    //       else if (openSlide === [...slider.children].length - 2) openSlide = 0;
    //       slider.scrollTo({
    //         left:
    //           [...slider.children][openSlide].getBoundingClientRect().width *
    //           openSlide,
    //         behavior: "smooth",
    //       });
    //       activeSlide([...navSlider.children], openSlide, openSlide);
    //     }
    //     // Drag left
    //     else {
    //       if (openSlide > 0) openSlide--;
    //       slider.scrollTo({
    //         left:
    //           [...slider.children][openSlide].getBoundingClientRect().width *
    //           openSlide,
    //         behavior: "smooth",
    //       });
    //       activeSlide([...navSlider.children], openSlide, openSlide);
    //     }
    //   }
    // });
  }

  // === UPDATE SLIDE WHEN MOUSE DRAG ===
  function updateSectionWhenMouseDrag(slider, openSlide, navSlider) {
    slider.on("mousedown", (e) => {
      mouseInitX = e.pageX;
      mouseDown = true;
    });
    slider.on("mousemove", (e) => {
      if (mouseDown) {
        if (
          openSlide + 1 <= [...slider.children()].length - 2 &&
          mouseInitX > e.pageX
        ) {
          slider.animate(
            {
              scrollLeft:
                window.innerWidth * (openSlide + 1) +
                mouseInitX -
                e.pageX -
                window.innerWidth,
            },
            0
          );
        } else if (openSlide - 1 >= 0 && mouseInitX < e.pageX) {
          slider.animate(
            {
              scrollLeft:
                window.innerWidth * (openSlide - 1) -
                e.pageX +
                mouseInitX +
                window.innerWidth,
            },
            0
          );
        }
      }
    });
    slider.on("mouseup", (e) => {
      if (
        e.pageX < mouseInitX &&
        openSlide < [...slider.children()].length - 2
      ) {
        openSlide++;
        slider.animate(
          {
            scrollLeft:
              [...slider.children()][openSlide].getBoundingClientRect().width *
              openSlide,
          },
          700
        );
      } else if (e.pageX > mouseInitX && openSlide > 0) {
        openSlide--;
        slider.animate(
          {
            scrollLeft:
              [...slider.children()][openSlide].getBoundingClientRect().width *
              openSlide,
          },
          700
        );
      }
      activeSlide(navSlider.children(), openSlide, openSlide);
      mouseDown = false;
      // updateSectionWhenKeydown(slider, openSlide, navSlider)
      // console.log(openSlide)
    });
  }

  // === UPDATE SLIDE WHEN KEY DOWN ===
  function updateSectionWhenKeydown(slider, openSlide, navSlider) {
    window.addEventListener("keydown", (e) => {
      if (slider.position().top === 0) {
        if (e.code === "ArrowRight") {
          if (openSlide < [...slider.children()].length - 1) openSlide++;
          else if (openSlide === [...slider.children()].length - 1)
            openSlide = 0;
          slide(slider, openSlide);
          activeSlide(navSlider.children(), openSlide, openSlide);
        } else if (e.code === "ArrowLeft") {
          if (openSlide > 0) openSlide--;
          slide(slider, openSlide);
          activeSlide(navSlider.children(), openSlide, openSlide);
        }
        // updateSectionWhenMouseDrag(slider, openSlide, navSlider)
      }
    });
  }

  // === INIT ===
  const sliders = $(".jpage .section .slider");
  sliders.each(function (index) {
    let openSlide = 0;
    const navSlider = $("<div class='nav-slider'></div>");
    if (sliderConfig.showControls === true) {
      const slider = $(this);
      $(this)
        .children()
        .each(function (indexSlide) {
          const button = $("<button></button>");
          if (indexSlide === 0) button.addClass("active-slide");
          button.on("click", function () {
            openSlide = indexSlide;
            activeSlide(navSlider.children(), indexSlide, openSlide);
            slide(slider, indexSlide);
            // updateSectionWhenResize(slider, openSlide, navSlider);
            // updateSectionWhenTouch(slider, openSlide, navSlider);
            // updateSectionWhenMouseDrag(slider, openSlide, navSlider);
            // updateSectionWhenKeydown(slider, openSlide, navSlider);
          });
          navSlider.append(button);
        });
      $(this).append(navSlider);
    }
    // updateSectionWhenResize($(this), openSlide, navSlider);
    // updateSectionWhenTouch($(this), openSlide, navSlider);
    updateSectionWhenMouseDrag($(this), openSlide, navSlider);
    updateSectionWhenKeydown($(this), openSlide, navSlider);
  });
}
