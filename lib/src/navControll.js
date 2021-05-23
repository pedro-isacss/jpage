let open = 0;
function activeNavControll() {
  const controllers = document.querySelectorAll(".nav-controll button");
  controllers[open].classList.add("active");
  controllers.forEach((item, itemIndex) =>
    itemIndex !== open ? item.classList.remove("active") : null
  );
}

export const navControll = document.createElement("div");
navControll.setAttribute("class", "nav-controll");

export const createNavControl = (sections) => {
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      open++;
      window.scrollTo({ top: open * window.innerHeight, behavior: "smooth" });
    } else {
      open--;
      window.scrollTo({ top: open * window.innerHeight, behavior: "smooth" });
    }
    activeNavControll();
  });
  // window.addEventListener("touchmove", (e) => {
  // });
  sections.forEach((section, index) => {
    const button = document.createElement("button");
    if (index === 0) button.classList.add("active");
    button.onclick = () => {
      open = index;
      activeNavControll();
      window.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });
    };
    navControll.appendChild(button);
  });
};
