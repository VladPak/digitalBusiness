// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navigation");
var logoImg = document.getElementById("logoImg");
var anchorParent = document.querySelector("#navMenu");
var allAnchorNav = document.querySelectorAll(".nav-list > ul > li > a");
var responsiveModeUl = document.querySelector(".nav-list > ul");

var btnNav = document.getElementById("navigationBtn");
var btnNavResponsive = document.getElementById("navBtnDowload");
var btnBurgerResponsive = document.getElementById("navBtnBurger");

// Get the offset position of the navbar
var sticky = header.offsetTop;

//Get media query match of 766px
var matchX = window.matchMedia("(max-width: 766px)");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    //Responsive, topMove
    if(matchX.matches){
      header.classList.add("sticky");
      header.style.background = "#edeff0";
      logoImg.src = "images/logoBlue.svg"

      for(var i=0; i < allAnchorNav.length; i++){
        allAnchorNav[i].style.color = "#5a5a5a";
      }
      responsiveModeUl.style.background = "#edeff0";

      // btnNav.style.border = "2px solid #0067f4";
      // btnNav.style.background = "#ffffff";
      // btnNav.style.color = "#ffffff";

      btnNavResponsive.style.background = "#0067f4";
      btnNavResponsive.style.color = "#ffffff";

      btnBurgerResponsive.style.background = "#0067f4";
      btnBurgerResponsive.style.color = "#ffffff";
    }
    else{
      //Usual, topMove
      header.classList.add("sticky");
      header.style.background = "#edeff0";
      logoImg.src = "images/logoBlue.svg"

      for(var i=0; i < allAnchorNav.length; i++){
        allAnchorNav[i].style.color = "#5a5a5a";
      }
      btnNav.style.border = "2px solid #0067f4";
      btnNav.style.background = "#0067f4";
      btnNav.style.color = "#ffffff";
      responsiveModeUl.style.background = "#edeff0";
    }
  }
  else{
    //Responsive, maxTop
    if(matchX.matches){
      responsiveModeUl.style.background = "#0067f4";

      header.classList.remove("sticky");
      header.style.background = "#0067f4";
      logoImg.src = "images/logo.svg"

      for(var j=0; j < allAnchorNav.length; j++){
        allAnchorNav[j].style.color = "#ffffff";
      }

      btnNavResponsive.style.background = "#ffffff";
      btnNavResponsive.style.color = "#0067f4";

      btnBurgerResponsive.style.background = "#ffffff";
      btnBurgerResponsive.style.color = "#0067f4";

    }
    else{
      //Usual, maxTop
      responsiveModeUl.style.background = "#0067f4";

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
}
