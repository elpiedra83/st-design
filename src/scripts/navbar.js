let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let header = document.querySelector("header");
  if (prevScrollpos > currentScrollPos && currentScrollPos >= 0) {
    header.style.top = "0";
  } else {
    header.style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
};
