var topPosition = window.scrollY;
var homeLink = $('a[href="#s1"]')

if(topPosition == 0){
  homeLink.addClass("activeLink");
}
