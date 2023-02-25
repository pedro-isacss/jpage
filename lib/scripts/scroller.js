export default function Scroller(scrollConfig) {

  // === VARIABLES ===
  const afterSections = document.querySelector(".after-sections")
  const navScroll = $("<div></div>").addClass("nav-control")
  let open = 0
  let scrollable = true
  let ts_x = 0
  let ts_y = 0

  // === SCROLL FUNCTION ===
  function scroll(behavior, direction, wait) {
    if (direction === "down") open++
    else if (direction === "up") open--
    $(document.body).animate({
      scrollTop: window.innerHeight * open
    }, 700)
    if (wait === true) {
      scrollable = false;
      setTimeout(() => {
        scrollable = true;
      }, scrollConfig.waitingTime);
    }
  }

  // === ACTIVE SCROLL FUNCTION ===
  function activeScroll() {
    if (scrollConfig.showControls === true) {
      const controllers = document.querySelectorAll(".nav-control button");
      controllers[open]?.classList.add("active");
      controllers.forEach((item, itemIndex) =>
        itemIndex !== open ? item.classList.remove("active") : null
      );
    }
  }

  // === RESIZE SECTIONS FUNCTION ===
  function resizeSections(sections) {
    sections.forEach(section => {
      document.body.style.height = `${window.innerHeight}px`
      section.style.height = `${window.innerHeight}px`
    })
  }

  // === UPDATE SECTIONS WHEN RESIZE FUNCTION ===
  function updateSectionWhenResize(sections) {
    window.addEventListener("resize", () => {
      resizeSections(sections)
      scroll("auto")
    });
  }

  // === UPDATE SECTIONS WHEN RESIZE FUNCTION ===
  function updateSectionWhenWheel(sections) {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0 && open < sections.length - 1 && scrollable) {
        scroll("smooth", "down", true)
      } else if (e.deltaY < 0 && open > 0 && scrollable) {
        if (!afterSections || afterSections.scrollTop === 0) {
          scroll("smooth", "up", true)
        }
      } else if (open + 1 === sections.length && scrollable && afterSections) {
        scroll("smooth", "down", true)
      }
      activeScroll();
    });
  }

  // === UPDATE SECTIONS WHEN RESIZE FUNCTION ===
  function updateSectionWhenKeydown(sections) {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown") {
        if (open < sections.length - 1) {
          scroll("smooth", "down", true)
        }
        else if (open + 1 === sections.length && scrollable && afterSections) {
          scroll("smooth", "down", true)
        }
      } else if (e.code === "ArrowUp" && open > 0) {
        if (!afterSections || afterSections.scrollTop === 0) {
          scroll("smooth", "up", true)
        }
      }
      activeScroll();
    });
  }

  // === UPDATE SECTIONS WHEN RESIZE FUNCTION ===
  function updateSectionWhenTouch(sections) {
    window.addEventListener("touchstart", (e) => {
      ts_x = e.touches[0].clientX;
      ts_y = e.touches[0].clientY;
    });
    window.addEventListener("touchend", (e) => {
      const td_x = e.changedTouches[0].clientX - ts_x;
      const td_y = e.changedTouches[0].clientY - ts_y;
      if (Math.abs(td_x) <= Math.abs(td_y)) {
        // Drag up
        if (td_y < 0) {
          if (open < sections.length - 1) {
            scroll("smooth", "down",)
          } else if (open + 1 === sections.length && scrollable && afterSections) {
            scroll("smooth", "down",)
          }
        }
        // Drag down
        else if (td_y > 0 && open > 0) {
          if (!afterSections || afterSections.scrollTop === 0) {
            scroll("smooth", "up")
          }
        }
        activeScroll();
      }
    });
  }

  // === ===
  const jpage = $(".jpage");
  const sections = document.querySelectorAll(".jpage .section");
  updateSectionWhenResize(sections)
  updateSectionWhenWheel(sections)
  updateSectionWhenTouch(sections)
  updateSectionWhenKeydown(sections)
  resizeSections(sections)
  if (scrollConfig.showControls === true) {
    sections.forEach((section, index) => {
      const button = document.createElement("button");
      if (index === 0) button.classList.add("active");
      button.onclick = () => {
        open = index;
        activeScroll();
        scroll("smooth")
      };
      navScroll.append(button);
    });
    jpage.append(navScroll);
  }
}