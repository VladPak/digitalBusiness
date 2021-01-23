$(document).ready(function(){
  $(".questionTitle").click(function(){
    $flip = $(this);
    $content = $flip.next();
    $content.slideToggle();

    // .next().find(".questionContent").slideToggle("fast");

      if($("#qaSpan").text() == "▲"){
        $("#qaSpan").text("▼");
      }
      else if($("#qaSpan").text() == "▼"){
        $("#qaSpan").text("▲");

      }
  });
});
