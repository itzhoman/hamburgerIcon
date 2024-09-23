const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuContainer = document.querySelector(".menu-container");

hamburgerIcon.addEventListener('click', () => {
  menuContainer.classList.toggle("menu-open");
});
