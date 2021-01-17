// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navigation");
var logoImg = document.getElementById("logoImg");

var anchorParent = document.querySelector("#navMenu");
var allAnchorNav = document.querySelectorAll(".nav-list > li > a");


var btnNav = document.getElementById("navigationBtn");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.background = "#ffffff";
    logoImg.src = "images/logoBlue.svg"

    for(var i=0; i < allAnchorNav.length; i++){
      allAnchorNav[i].style.color = "#5a5a5a";
    }
    btnNav.style.border = "2px solid #0067f4";
    btnNav.style.background = "#0067f4";
    btnNav.style.color = "#ffffff";


  } else {
    header.classList.remove("sticky");
    header.style.background = "#0067f4";
    logoImg.src = "images/logo.svg"

    for(var j=0; j < allAnchorNav.length; j++){
      allAnchorNav[j].style.color = "#ffffff";
    }

    btnNav.style.background = "#ffffff";
    btnNav.style.color = "#0067f4";
    btnNav.style.border = "1px solid #ffffff";

  }
}
