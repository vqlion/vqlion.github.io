var title = document.getElementById("title1");
var appbg = document.getElementById("appbg");
var social = document.getElementById("social");
var bg = document.getElementById("bg");
var bigbox = document.getElementById("bigbox");
var footer = document.getElementById("footer");
var scrollers = document.getElementById("scrollers");
var clicked = false;

//detects if the device is a phone or tablet in portrait mode
if (
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <=
    480 ||
  (Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  ) >= 768 &&
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ) < 1024)
) {
  appbg.className = "clicked";
  bg.className = "clicked";
  social.className = "show";
  bigbox.className = "show";
  footer.className = "show";
  title.className = "black";
  clicked = true;
}

//these three listeners are for the initial animation when you first land on the page
title.onmouseover = function () {
  if (!clicked) {
    appbg.className = "hovered";
    title.className = "black";
  }
};

title.onmouseout = function () {
  if (!clicked) {
    appbg.className = "hoverout";
    title.className = "white";
  }
};

title.onclick = function () {
  appbg.className = "clicked";
  bg.className = "clicked";
  social.className = "show";
  bigbox.className = "show";
  footer.className = "show";
  scrollers.className = "show";
  clicked = true;
};

//used to animate on scroll: when the object observed is visible, it gains the 'trans' class, then loses it's not visible again
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("trans");
      //social.classList.add("transup");
      title.classList.add("transup");
      scrollers.classList.add("transup")
    } else {
      entry.target.classList.remove("trans");
      //social.classList.remove("transup");
      title.classList.remove("transup");
    }
  });
});

observer.observe(document.querySelector(".scroll"));
