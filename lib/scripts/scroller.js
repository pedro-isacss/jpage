export default class Scroller {
  constructor(scrollConfig) {
    this.scrollConfig = scrollConfig
    this.open = 0
    this.ts_x
    this.ts_y
    this.scrollable = true
    this.afterSections = document.querySelector(".after-sections")
    this.navScroll = document.createElement("div");
    this.navScroll.setAttribute("class", "nav-control");
  }

  scroll(behavior, direction, wait) {
    if (direction === "down") this.open++
    else if (direction === "up") this.open--
    document.body.scrollTo({
      top: window.innerHeight * this.open,
      behavior,
    });
    if (wait === true) {
      this.scrollable = false;
      setTimeout(() => {
        this.scrollable = true;
      }, this.scrollConfig.waitingTime);
    }
  }

  activeScroll() {
    if (this.scrollConfig.showControls === true) {
      const controllers = document.querySelectorAll(".nav-control button");
      controllers[this.open]?.classList.add("active");
      controllers.forEach((item, itemIndex) =>
        itemIndex !== this.open ? item.classList.remove("active") : null
      );
    }
  }

  resizeSections(sections) {
    sections.forEach(section => {
      document.body.style.height = `${window.innerHeight}px`
      section.style.height = `${window.innerHeight}px`
    })
  }

  updateSectionWhenResize(sections) {
    window.addEventListener("resize", () => {
      this.resizeSections(sections)
      this.scroll("auto")
    });
  }

  updateSectionWhenWheel(sections) {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0 && this.open < sections.length - 1 && this.scrollable) {
        this.scroll("smooth", "down", true)
      } else if (e.deltaY < 0 && this.open > 0 && this.scrollable) {
        if (!this.afterSections || this.afterSections.scrollTop === 0) {
          this.scroll("smooth", "up", true)
        }
      } else if (this.open + 1 === sections.length && this.scrollable && this.afterSections) {
        this.scroll("smooth", "down", true)
      }
      this.activeScroll();
    });
  }

  updateSectionWhenTouch(sections) {
    window.addEventListener("touchstart", (e) => {
      this.ts_x = e.touches[0].clientX;
      this.ts_y = e.touches[0].clientY;
    });
    window.addEventListener("touchend", (e) => {
      const td_x = e.changedTouches[0].clientX - this.ts_x;
      const td_y = e.changedTouches[0].clientY - this.ts_y;
      if (Math.abs(td_x) <= Math.abs(td_y)) {
        // Drag up
        if (td_y < 0) {
          if (this.open < sections.length - 1) {
            this.scroll("smooth", "down",)
          } else if (this.open + 1 === sections.length && this.scrollable && this.afterSections) {
            this.scroll("smooth", "down",)
          }
        }
        // Drag down
        else if (td_y > 0 && this.open > 0) {
          if (!this.afterSections || this.afterSections.scrollTop === 0) {
            this.scroll("smooth", "up")
          }
        }
        this.activeScroll();
      }
    });
  }

  updateSectionWhenKeydown(sections) {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown") {
        if (this.open < sections.length - 1) {
          this.scroll("smooth", "down", true)
        }
        else if (this.open + 1 === sections.length && this.scrollable && this.afterSections) {
          this.scroll("smooth", "down", true)
        }
      } else if (e.code === "ArrowUp" && this.open > 0) {
        if (!this.afterSections || this.afterSections.scrollTop === 0) {
          this.scroll("smooth", "up", true)
        }
      }
      this.activeScroll();
    });
  }

  createScroll() {
    const jpage = document.querySelector(".jpage");
    const sections = document.querySelectorAll(".jpage .section");
    this.updateSectionWhenResize(sections)
    this.updateSectionWhenWheel(sections)
    this.updateSectionWhenTouch(sections)
    this.updateSectionWhenKeydown(sections)
    this.resizeSections(sections)
    if (this.scrollConfig.showControls === true) {
      sections.forEach((section, index) => {
        const button = document.createElement("button");
        if (index === 0) button.classList.add("active");
        button.onclick = () => {
          this.open = index;
          this.activeScroll();
          this.scroll("smooth")
        };
        this.navScroll.appendChild(button);
      });
      jpage.appendChild(this.navScroll);
    }
  }
}
