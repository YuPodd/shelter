function burgerMenu() {
  let menu = document.querySelector(".nav-menu");
  if (menu.className === "nav-menu") {
    menu.className += " responsive";
  } else {
    menu.className = "nav-menu";
  }
}
