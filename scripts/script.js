var title = document.getElementById('title1')
var appbg = document.getElementById("appbg")
var social = document.getElementById("social")
var bg = document.getElementById("bg")
var clicked = false
//appbg.className = 'clicked'
//title.style.color = 'black'

title.onmouseover = function() {
    if(!clicked) {
        appbg.className = 'hovered'
        title.style.color = 'black'
    }
}

title.onmouseout = function() {
    if(!clicked) {
        appbg.className = 'hoverout'
        title.style.color = 'white'
    }
}

title.onclick = function() {
    appbg.className = 'clicked'
    bg.className = 'clicked'
    social.className = 'show'
    clicked = true;
}