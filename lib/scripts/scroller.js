export default function Scroller() {
  let open = 0;
  let ts_x
  let ts_y;
  let scrollable = true;
  const navScroll = document.createElement("div");
  navScroll.setAttribute("class", "nav-control");

  function timeoutScroll() {
    scrollable = false;
    setTimeout(() => {
      scrollable = true;
    }, 1200);
  }

  function activeScroll() {
    const controllers = document.querySelectorAll(".nav-control button");
    controllers[open].classList.add("active");
    controllers.forEach((item, itemIndex) =>
      itemIndex !== open ? item.classList.remove("active") : null
    );
  }

  function updateSectionWhenResize(sections) {
    window.addEventListener("resize", function () {
      window.scrollTo({
        top: sections[open].getBoundingClientRect().height * open,
      });
    });
  }

  function updateSectionWhenWheel(sections) {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0 && open < sections.length - 1 && scrollable) {
        open++;
        window.scrollTo({
          top: sections[open].getBoundingClientRect().height * open,
          behavior: "smooth",
        });
        timeoutScroll();
      } else if (e.deltaY < 0 && open > 0 && scrollable) {
        open--;
        window.scrollTo({
          top: sections[open].getBoundingClientRect().height * open,
          behavior: "smooth",
        });
        timeoutScroll();
      }
      activeScroll();
    });
  }

  function updateSectionWhenTouch(sections) {
    window.addEventListener("touchstart", (e) => {
      ts_x = e.touches[0].clientX;
      ts_y = e.touches[0].clientY;
    });
    window.addEventListener("touchend", (e) => {
      var td_x = e.changedTouches[0].clientX - ts_x;
      var td_y = e.changedTouches[0].clientY - ts_y;
      if (Math.abs(td_x) <= Math.abs(td_y)) {
        // Drag up
        if (td_y < 0 && open < sections.length - 1) {
          open++;
          window.scrollTo({
            top: sections[open].getBoundingClientRect().height * open,
            behavior: "smooth",
          });
        }
        // Drag down
        else if (td_y > 0 && open > 0) {
          open--;
          window.scrollTo({
            top: sections[open].getBoundingClientRect().height * open,
            behavior: "smooth",
          });
        }
        activeScroll();
      }
    });
  }

  function updateSectionWhenKeydown(sections) {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown" && open < sections.length - 1) {
        open++;
        window.scrollTo({
          top: sections[open].getBoundingClientRect().height * open,
          behavior: "smooth",
        });
      } else if (e.code === "ArrowUp" && open > 0) {
        open--;
        window.scrollTo({
          top: sections[open].getBoundingClientRect().height * open,
          behavior: "smooth",
        });
      }
      activeScroll();
    });
  }

  this.getOpenSection = function () {
    return open
  }

  this.createScroll = function () {
    const jpage = document.querySelector(".jpage");
    const sections = document.querySelectorAll(".jpage .section");
    updateSectionWhenResize(sections)
    updateSectionWhenWheel(sections)
    updateSectionWhenTouch(sections)
    updateSectionWhenKeydown(sections)
    document.body.style.overflow = "hidden";
    sections.forEach((section, index) => {
      const button = document.createElement("button");
      if (index === 0) button.classList.add("active");
      button.onclick = () => {
        open = index;
        activeScroll();
        window.scrollTo({
          top: sections[open].getBoundingClientRect().height * open,
          behavior: "smooth",
        });
      };
      navScroll.appendChild(button);
    });

    jpage.appendChild(navScroll);
  }
}
