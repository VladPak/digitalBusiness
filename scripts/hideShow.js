//Get the action: -> click on burger btn -> open/close the menu
//Set condition: -> banned scrolling the content of viewport when the menu is anchorParent
//Set condition: -> change the icon of the burger button
$('#navBtnBurger').click(function (e){
  e.preventDefault();
  $('ul.menu').toggleClass('open-menu-list');
  $('body').toggleClass('block-scrolling');

  if($("#navBtnBurger").text() == "☰"){
    $("#navBtnBurger").text("X");
  }
  else if($("#navBtnBurger").text() == "X"){
    $("#navBtnBurger").text("☰");
  }
});

//Get the action: -> click on anchors (navigation link) -> close the menu
$('ul.menu li a').click(function (e){
  e.preventDefault();
  $("#navBtnBurger").text("☰");
  $('ul.menu').toggleClass('open-menu-list');
  $('body').removeClass('block-scrolling');

});
