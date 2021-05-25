let open = 0;
let ts_x;
let ts_y;

function activeNavControl() {
  const controllers = document.querySelectorAll(".nav-control button");
  controllers[open].classList.add("active");
  controllers.forEach((item, itemIndex) =>
    itemIndex !== open ? item.classList.remove("active") : null
  );
}

export const navControl = document.createElement("div");
navControl.setAttribute("class", "nav-control");

export const createNavControl = (sections) => {
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && open < sections.length - 1) {
      open++;
      window.scrollTo({
        top: sections[open].getBoundingClientRect().height * open,
        behavior: "smooth",
      });
    } else if (e.deltaY < 0 && open > 0) {
      open--;
      window.scrollTo({
        top: sections[open].getBoundingClientRect().height * open,
        behavior: "smooth",
      });
    }
    activeNavControl();
  });
  window.addEventListener("touchstart", (e) => {
    ts_x = e.touches[0].clientX;
    ts_y = e.touches[0].clientY;
  });
  window.addEventListener("touchend", (e) => {
    var td_x = e.changedTouches[0].clientX - ts_x;
    var td_y = e.changedTouches[0].clientY - ts_y;
    if (Math.abs(td_x) <= Math.abs(td_y)) {
      if (td_y < 0 && open < sections.length - 1) {
        open++;
        window.scrollTo({ top: open * window.innerHeight, behavior: "smooth" });
      } else if (td_y > 0 && open > 0) {
        open--;
        window.scrollTo({ top: open * window.innerHeight, behavior: "smooth" });
      }
      activeNavControl();
    }
  });
  sections.forEach((section, index) => {
    const button = document.createElement("button");
    if (index === 0) button.classList.add("active");
    button.onclick = () => {
      open = index;
      activeNavControl();
      window.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });
    };
    navControl.appendChild(button);
  });
};
