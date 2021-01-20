jQuery(document).ready(function() {
  var btn = $('#btnUp');
  var homeLink = $('a[href="#s1"]')
  var notHomeLinks = $(".menu > li > a");


  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '2000');
    //remove activeLink from current link and attach it to home link
    if(notHomeLinks != homeLink && homeLink === homeLink){
      notHomeLinks.removeClass("activeLink");
      homeLink.addClass("activeLink");
    }
  });
});
