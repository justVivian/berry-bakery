// banner slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("banner");
    let dots = document.getElementsByClassName("dot");
    if (n==undefined) {n = ++slideIndex}
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    setTimeout(showSlides, 10000);
}

// responsive menu
function showMenu() {
    let mainListDiv = document.getElementById("mainListDiv");
    let mediaButton = document.getElementById("mediaButton");

    mainListDiv.classList.toggle("show-list");
    mediaButton.classList.toggle("active");
}