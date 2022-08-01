const header = document.querySelector(".header");
const navBar = document.querySelector(".navigation");
const mobileNavBar = document.querySelector(".nav__mobile");
const openIcon = document.querySelector(".logo-icon-1");
const closeIcon = document.querySelector(".logo-icon-2");

openIcon.addEventListener("click", () => {
  header.classList.add("mobile-active");
});

closeIcon.addEventListener("click", () => {
  header.classList.remove("mobile-active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navBar.classList.add("bg");
    mobileNavBar.classList.add("bg");
  } else {
    navBar.classList.remove("bg");
    mobileNavBar.classList.remove("bg");
  }
});
