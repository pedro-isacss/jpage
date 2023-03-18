export default function createSliders(sliderConfig) {
  // === VARIABLES ===
  let ts_x = 0;
  let ts_y = 0;
  let mouseInitX = 0;
  let mouseDown = false;
  let opens = [];

  // === SLIDE ===
  function slide(slider, open) {
    slider.animate(
      {
        scrollLeft: window.innerWidth * open,
      },
      sliderConfig.duration
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
  function updateSectionWhenResize(slider, index) {
    window.addEventListener("resize", function () {
      slider.animate(
        {
          scrollLeft:
            [...slider.children()][opens[index]].getBoundingClientRect().width *
            opens[index],
        },
        0
      );
    });
  }

  // === UPDATE SLIDE WHEN TOUCH ===
  function updateSectionWhenTouch(slider, index, navSlider) {
    const slidesNumber = navSlider
      ? [...slider.children()].length - 2
      : [...slider.children()].length - 1;
    slider.on("touchstart", (e) => {
      ts_x = e.touches[0].clientX;
      ts_y = e.touches[0].clientY;
    });
    slider.on("touchend", (e) => {
      const td_x = e.changedTouches[0].clientX - ts_x;
      const td_y = e.changedTouches[0].clientY - ts_y;
      if (Math.abs(td_x) > Math.abs(td_y)) {
        // Drag right
        if (td_x < 0) {
          if (opens[index] < slidesNumber) opens[index] = opens[index] + 1;
          else if (opens[index] === slidesNumber) opens[index] = 0;
          slide(slider, opens[index]);
        }
        // Drag left
        else {
          if (opens[index] > 0) opens[index] = opens[index] - 1;
          slide(slider, opens[index]);
        }
        if (navSlider) {
          activeSlide(navSlider.children(), opens[index], opens[index]);
        }
      }
    });
  }

  // === UPDATE SLIDE WHEN MOUSE DRAG ===
  function updateSectionWhenMouseDrag(slider, index, navSlider) {
    const slidesNumber = navSlider
      ? [...slider.children()].length - 2
      : [...slider.children()].length - 1;
    slider.on("mousedown", (e) => {
      mouseInitX = e.pageX;
      mouseDown = true;
    });
    slider.on("mousemove", (e) => {
      if (mouseDown) {
        if (opens[index] + 1 <= slidesNumber && mouseInitX > e.pageX) {
          slider.animate(
            {
              scrollLeft:
                window.innerWidth * (opens[index] + 1) +
                mouseInitX -
                e.pageX -
                window.innerWidth,
            },
            0
          );
        } else if (opens[index] - 1 >= 0 && mouseInitX < e.pageX) {
          slider.animate(
            {
              scrollLeft:
                window.innerWidth * (opens[index] - 1) -
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
      if (e.pageX < mouseInitX && opens[index] < slidesNumber) {
        opens[index] = opens[index] + 1;
        slide(slider, opens[index]);
      } else if (e.pageX > mouseInitX && opens[index] > 0) {
        opens[index] = opens[index] - 1;
        slide(slider, opens[index]);
      }
      if (navSlider) {
        activeSlide(navSlider.children(), opens[index], opens[index]);
      }
      mouseDown = false;
    });
  }

  // === UPDATE SLIDE WHEN KEY DOWN ===
  function updateSectionWhenKeydown(slider, index, navSlider) {
    const slidesNumber = navSlider
      ? [...slider.children()].length - 2
      : [...slider.children()].length - 1;
    window.addEventListener("keydown", (e) => {
      if (slider.position().top === 0) {
        if (e.code === "ArrowRight") {
          if (opens[index] < slidesNumber) opens[index] = opens[index] + 1;
          else if (opens[index] === slidesNumber) opens[index] = 0;
          slide(slider, opens[index]);
        } else if (e.code === "ArrowLeft") {
          if (opens[index] > 0) opens[index] = opens[index] - 1;
          slide(slider, opens[index]);
        }
        if (navSlider) {
          activeSlide(navSlider.children(), opens[index], opens[index]);
        }
      }
    });
  }

  // === INIT ===
  const sliders = $(".jpage .section .slider");
  sliders.each(function (index) {
    opens.push(0);
    let navSlider = $("<div class='nav-slider'></div>");
    if (sliderConfig.showControls === true) {
      const slider = $(this);
      $(this)
        .children()
        .each(function (indexSlide) {
          const button = $("<button></button>");
          if (indexSlide === 0) button.addClass("active-slide");
          button.on("click", function () {
            opens[index] = indexSlide;
            activeSlide(navSlider.children(), indexSlide, opens[index]);
            slide(slider, indexSlide);
          });
          navSlider.append(button);
        });
      $(this).append(navSlider);
    } else {
      navSlider = null;
    }
    updateSectionWhenResize($(this), index);
    updateSectionWhenTouch($(this), index, navSlider);
    updateSectionWhenMouseDrag($(this), index, navSlider);
    updateSectionWhenKeydown($(this), index, navSlider);
  });
}
