document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  const mask = document.querySelector(".header__mask");

  const hamburgerMenuSections = document.querySelectorAll(
    ".hamburger-menu-section"
  );

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    mask.classList.toggle("active");
  });
});
