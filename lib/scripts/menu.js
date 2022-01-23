export default class Menu {
  constructor(menuConfig) {
    this.menuConfig = menuConfig
    this.menuIsOpen = false;
    this.toggleMenuBtn = document.querySelector(".jpage #toggle-menu-btn")
    this.menu = document.querySelector(".jpage .menu")
    this.toggleMenuBtn.innerHTML = this.menuConfig.closeIconBtn
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen
    if (this.menuIsOpen) {
      this.menu.style.height = "100vh"
      this.toggleMenuBtn.innerHTML = this.menuConfig.openIconBtn
    } else {
      this.menu.style.height = "0vh"
      this.toggleMenuBtn.innerHTML = this.menuConfig.closeIconBtn
    }
  }

  createMenu() {
    this.toggleMenuBtn.addEventListener("click", () => {
      this.toggleMenu()
    })
  }
}