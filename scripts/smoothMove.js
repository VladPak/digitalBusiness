// $(document).ready(function(e) {
//     e.preventDefault();
//     var elementClick = $(this).attr("href")
//
//     var destination = $(elementClick).offset().top;
//     jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
//     return false;
//   });


  $(document).on("click", ".menu li a", function(e) {
    var header = document.getElementById("navigation");
    var sticky = header.offsetTop;

    if(window.pageYOffset > sticky){
      var navHeight = 110;
      var id  = $(this).attr('href');
      var top = $(id).offset().top; // получаем координаты блока
      $('body, html').animate({scrollTop: top - navHeight}, 800); // плавно переходим к блоку
    }
    else{
      var navHeight = 200;
      var id  = $(this).attr('href');
      var top = $(id).offset().top; // получаем координаты блока
      $('body, html').animate({scrollTop: top - navHeight}, 800); // плавно переходим к блоку
    }

  });
