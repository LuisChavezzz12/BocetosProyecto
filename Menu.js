
  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const menuLinks = document.querySelector(".menu-links");

    hamburgerBtn.addEventListener("click", () => {
      menuLinks.classList.toggle("active"); // Alternar clase 'active'
    });
  });

