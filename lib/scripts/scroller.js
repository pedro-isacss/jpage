export default class Scroller {
  constructor() {
    this.open = 0
    this.ts_x
    this.ts_y
    this.scrollable = true
    this.navScroll = document.createElement("div");
    this.navScroll.setAttribute("class", "nav-control");
  }

  timeoutScroll() {
    this.scrollable = false;
    setTimeout(() => {
      this.scrollable = true;
    }, 400);
  }

  activeScroll() {
    const controllers = document.querySelectorAll(".nav-control button");
    controllers[this.open].classList.add("active");
    controllers.forEach((item, itemIndex) =>
      itemIndex !== this.open ? item.classList.remove("active") : null
    );
  }

  updateSectionWhenResize(sections) {
    window.addEventListener("resize", () => {
      window.scrollTo({
        top: sections[this.open].getBoundingClientRect().height * this.open,
      });
    });
  }

  updateSectionWhenWheel(sections) {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0 && this.open < sections.length - 1 && this.scrollable) {
        this.open++;
        window.scrollTo({
          top: sections[this.open].getBoundingClientRect().height * this.open,
          behavior: "smooth",
        });
        this.timeoutScroll();
      } else if (e.deltaY < 0 && this.open > 0 && this.scrollable) {
        this.open--;
        window.scrollTo({
          top: sections[this.open].getBoundingClientRect().height * this.open,
          behavior: "smooth",
        });
        this.timeoutScroll();
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
        if (td_y < 0 && this.open < sections.length - 1) {
          this.open++;
          window.scrollTo({
            top: sections[this.open].getBoundingClientRect().height * this.open,
            behavior: "smooth",
          });
        }
        // Drag down
        else if (td_y > 0 && this.open > 0) {
          this.open--;
          window.scrollTo({
            top: sections[this.open].getBoundingClientRect().height * this.open,
            behavior: "smooth",
          });
        }
        this.activeScroll();
      }
    });
  }

  updateSectionWhenKeydown(sections) {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown" && this.open < sections.length - 1) {
        this.open++;
        window.scrollTo({
          top: sections[this.open].getBoundingClientRect().height * this.open,
          behavior: "smooth",
        });
      } else if (e.code === "ArrowUp" && this.open > 0) {
        this.open--;
        window.scrollTo({
          top: sections[this.open].getBoundingClientRect().height * this.open,
          behavior: "smooth",
        });
      }
      this.activeScroll();
    });
  }

  get getOpenSection() {
    return this.open
  }

  createScroll() {
    const jpage = document.querySelector(".jpage");
    const sections = document.querySelectorAll(".jpage .section");
    this.updateSectionWhenResize(sections)
    this.updateSectionWhenWheel(sections)
    this.updateSectionWhenTouch(sections)
    this.updateSectionWhenKeydown(sections)
    document.body.style.overflow = "hidden";
    sections.forEach((section, index) => {
      const button = document.createElement("button");
      if (index === 0) button.classList.add("active");
      button.onclick = () => {
        this.open = index;
        this.activeScroll();
        window.scrollTo({
          top: sections[this.open].getBoundingClientRect().height * this.open,
          behavior: "smooth",
        });
      };
      this.navScroll.appendChild(button);
    });

    jpage.appendChild(this.navScroll);
  }
}
