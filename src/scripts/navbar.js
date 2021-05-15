let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let mobileLinks = document.querySelector("#mobileLinks");
  let header = document.querySelector("#header");
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    mobileLinks.style.top = "7em";
  } else {
    header.style.top = "-150px";
    mobileLinks.style.top = "-160px";
  }
  prevScrollpos = currentScrollPos;
};

function hamburger() {
  let mobileLinks = document.querySelector("#mobileLinks");
  if (mobileLinks.style.display === "block") {
    mobileLinks.style.display = "none";
  } else {
    mobileLinks.style.display = "block";
  }
}
