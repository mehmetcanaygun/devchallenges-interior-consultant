const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("toggled");
  navbar.classList.toggle("toggled");

  if(navbar.classList.contains("toggled")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }
});