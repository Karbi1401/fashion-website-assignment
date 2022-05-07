var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.remove("nav-masthead-light", "navbar-dark");
    nav.classList.add(
      "bg-light",
      "shadow",
      "nav-masthead-dark",
      "navbar-light"
    );
  } else {
    nav.classList.remove(
      "bg-light",
      "shadow",
      "nav-masthead-dark",
      "navbar-light"
    );
    nav.classList.add("nav-masthead-light", "navbar-dark");
  }
});
