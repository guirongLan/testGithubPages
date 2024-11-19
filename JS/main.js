window.addEventListener("scroll", function () {
  scroll();
});

function scroll() {
  // Check if the page has been scrolled more than 20px
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("Return_top").classList.add("detected");
  } else {
    document.getElementById("Return_top").classList.remove("detected");
  }
}

function OpenSmallMenu() {
  var menu = document.getElementById("menu");
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
    document.body.classList.add("remove-scroll");
  } else {
    menu.classList.remove("active");
    document.body.classList.remove("remove-scroll");
  }
}
