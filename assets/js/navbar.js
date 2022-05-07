var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});
