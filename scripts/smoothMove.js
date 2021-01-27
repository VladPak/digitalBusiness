  $(document).on("click", ".menu li a", function(e) {
    var header = document.getElementById("navigation");
    var sticky = header.offsetTop;

    if(window.pageYOffset > sticky){
      var navHeight = 80;
      var id  = $(this).attr('href');
      var top = $(id).offset().top; // получаем координаты блока
      $('body, html').animate({scrollTop: top - navHeight}, 800); // плавно переходим к блоку
    }
    else{
      var navHeight = 160;
      var id  = $(this).attr('href');
      var top = $(id).offset().top; // получаем координаты блока
      $('body, html').animate({scrollTop: top - navHeight}, 800); // плавно переходим к блоку
    }

  });
