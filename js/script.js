var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

showSlides();


function currentSlide(index) {
    slideIndex = index;
    if (slideIndex > slides.length) {index = 1}
    else if(slideIndex < 1){index = slides.length}
    for (i = 0; i < slides.length; i++) {   
        slides[i].style.opacity = 0;  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.opacity = 1;  
    dots[slideIndex - 1].className += " active";
}

function showSlides() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.opacity = 1;  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 7000);
}
