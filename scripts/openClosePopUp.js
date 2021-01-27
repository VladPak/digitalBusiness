var btnForOpen = document.getElementById("popupDownload");

document.getElementById("navBtnDowload").addEventListener("click", function() {
  btnForOpen.classList.add("openPopUp");
  document.body.classList.add("openPopUpBlockBody");
  //disableScrolling();
});

document.getElementById("navigationBtn").addEventListener("click", function() {
  btnForOpen.classList.add("openPopUp");
  document.body.classList.add("openPopUpBlockBody");
  //disableScrolling();
});

document.getElementById("closePopUp").addEventListener("click", function() {
  btnForOpen.classList.remove("openPopUp");
  document.body.classList.remove("openPopUpBlockBody");
  //enableScrolling();
});


function disableScrolling(){
    var x=window.pageYOffset;
    var y=window.pageXOffset;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}
