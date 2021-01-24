// var topPosition = window.scrollY;
// var homeLink = $('a[href="#s1"]')
//
// if(topPosition == 0){
//   homeLink.addClass("activeLink");
// }


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-list ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 3)){
      current = section.getAttribute("id");
    }
  });
  navLi.forEach(a => {
    a.classList.remove("activeLink");
    if (a.classList.contains(current)) {
      a.classList.add("activeLink");
    }
  });
});
