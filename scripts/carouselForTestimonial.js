let slideIndex1 = 0;
let slider1 = document.querySelector(".sliderForTestimonial");
let slides1 = document.querySelector(".testimonialSlides");
let slide1 = document.querySelectorAll(".slideTestimonial");

showslide();

function plusslide(position1) {
    slideIndex1 += position1;

    if (slideIndex1 > slide1.length) {
        slideIndex1 = 1;
    }
    else if (slideIndex1 < 1) {
        slideIndex1 = slide1.length;
    }



    slides1.style.left = `-${slideIndex1 - 1}00%`;
}

function currentslide(index1) {
    if (index1 > slide1.length) {
        index1 = 1;
    }
    else if (index1 < 1) {
        index1 = slide1.length;
    }

    slides1.style.left = `-${index1 - 1}00%`;

    slideIndex1 = index1;
}

function showslide() {
    slideIndex1++;

    if (slideIndex1 > slide1.length) {
        slideIndex1 = 1;
    }
    else if (slideIndex1 < 1) {
        slideIndex1 = slide1.length;
    }
    slides1.style.left = `-${slideIndex1 - 1}00%`;
}


let interval1 = setInterval(()=> {
    showslide();
} , 2500);   // Change every image after 3 seconds

slider1.addEventListener("mouseover" , ()=> {
    clearInterval(interval1);     // onHover Stop Changing every image after 3 seconds
});

slider1.addEventListener("mouseout" , ()=> {
    interval1 = setInterval(()=> {
        showslide();
    } , 2500);    // on mouseout from slide then again start Changing every image after 3  seconds
});
