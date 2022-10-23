var title = document.getElementById("title1");
var appbg = document.getElementById("appbg");
var social = document.getElementById("social");
var bg = document.getElementById("bg");
var bigbox = document.getElementById("bigbox");
var clicked = false;
//appbg.className = 'clicked'
//title.style.color = 'black'

title.onmouseover = function () {
  if (!clicked) {
    appbg.className = "hovered";
    title.style.color = "black";
  }
};

title.onmouseout = function () {
  if (!clicked) {
    appbg.className = "hoverout";
    title.style.color = "white";
  }
};

title.onclick = function () {
  appbg.className = "clicked";
  bg.className = "clicked";
  social.className = "show";
  bigbox.className = "show";
  clicked = true;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("trans");
        //social.classList.add("transup");
        title.classList.add("transup");
    } else {
        entry.target.classList.remove("trans");
        //social.classList.remove("transup");
        title.classList.remove("transup");
    }

  });
});

observer.observe(document.querySelector(".scroll"));
