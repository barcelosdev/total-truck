let index = 1
let autoIndex = 1

showSlides(index)
autoSlides()

function autoSlides() {
    let autoSlide = document.getElementsByClassName("slide");

    for (let i = 0; i < autoSlide.length; i++) {
        autoSlide[i].style.display = "none";
    }

    if (autoIndex > autoSlide.length) { autoIndex = 1 }

    autoSlide[autoIndex - 1].style.display = "block";

    autoIndex++;
    setTimeout(autoSlides, 10000);
}

function plusSlides(n) {
    showSlides(index += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        index = 1
    }
    else if (n < 1) {
        index = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index - 1].style.display = "block";
}