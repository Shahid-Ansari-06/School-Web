  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.getElementById("overlay");

  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuIcon.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuIcon.classList.remove("open");
    overlay.classList.remove("show");
  });