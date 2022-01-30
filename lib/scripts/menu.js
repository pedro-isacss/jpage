export default class Menu {
  constructor(menuConfig) {
    this.menuConfig = menuConfig
    this.menuIsOpen = false;
    this.toggleMenuBtn = document.querySelector(".jpage #toggle-menu-btn")
    this.menu = document.querySelector(".jpage .menu")
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen
    if (this.menuIsOpen) {
      this.menu.style.height = "100vh"
      this.toggleMenuBtn.innerHTML = this.menuConfig.buttonIconToClose
    } else {
      this.menu.style.height = "0vh"
      this.toggleMenuBtn.innerHTML = this.menuConfig.buttonIconToOpen
    }
  }

  createMenu() {
    if (this.menu && this.toggleMenuBtn) {
      this.toggleMenuBtn.innerHTML = this.menuConfig.buttonIconToOpen
      this.toggleMenuBtn.addEventListener("click", () => {
        this.toggleMenu()
      })
    }
  }
}