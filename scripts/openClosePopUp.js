var btnForOpen = document.getElementById("popupDownload");


document.getElementById("navigationBtn").addEventListener("click", function() {
  btnForOpen.classList.add("openPopUp");
  disableScrolling();
});

document.getElementById("closePopUp").addEventListener("click", function() {
  btnForOpen.classList.remove("openPopUp");
  enableScrolling();
});


function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}
