// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Close the menu when a menu item is clicked
const menuItems = document.querySelectorAll("#navMenu a");
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    navMenu.classList.add("hidden"); // Hide menu
    hamburger.classList.toggle("hamburger-active");
  });
});

// Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// Smooth scroll to top
document.getElementById("backToTop").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
