$(document).ready(function(){
  $(".questionTitle").click(function(){
    $flip = $(this);
    $content = $flip.next();
    $content.slideToggle();
  });
});
