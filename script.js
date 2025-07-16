document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.querySelector(".topbar");
  const topbarToggle = topbar.querySelector(".topbar__toggle");
  const openIcon = topbarToggle.querySelector('[data-js="open-menu-icon"]');
  const closeIcon = topbarToggle.querySelector('[data-js="close-menu-icon"]');
  const topbarLogo = topbar.querySelector(".topbar__logo");
  const topbarMenuBtn = topbar.querySelectorAll(".topbar__menu .btn");

  const isMenuOpen = () => topbar.classList.contains("topbar--expanded");
  const handleMenuToggle = () => {
    topbar.classList.toggle("topbar--expanded");
    openIcon.classList.toggle("btn__icon--hidden");
    closeIcon.classList.toggle("btn__icon--hidden");
    topbarToggle.setAttribute("aria-expanded", isMenuOpen());
  };

  topbarToggle.addEventListener("click", handleMenuToggle);
  [topbarLogo, ...topbarMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
      if (isMenuOpen()) {
        handleMenuToggle();
      }
    });
  });
});
