let slideIndex = 0;
let slider = document.querySelector(".sliderForTestimonial");
let slides = document.querySelector(".testimonialSlides");
let slide = document.querySelectorAll(".slideTestimonial");

showslide();

function plusslide(position) {
    slideIndex += position;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
    }

    slides.style.left = `-${slideIndex - 1}00%`;
}

function currentslide(index) {
    if (index > slide.length) {
        index = 1;
    }
    else if (index < 1) {
        index = slide.length;
    }

    slides.style.left = `-${index - 1}00%`;

    slideIndex = index;
}

function showslide() {
    slideIndex++;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }



    slides.style.left = `-${slideIndex - 1}00%`;
}


let interval = setInterval(()=> {
    showslide();
} , 3000);   // Change every image after 3 seconds

slider.addEventListener("mouseover" , ()=> {
    clearInterval(interval);     // onHover Stop Changing every image after 3 seconds
});

slider.addEventListener("mouseout" , ()=> {
    interval = setInterval(()=> {
        showslide();
    } , 3000);    // on mouseout from slide then again start Changing every image after 3  seconds
});
