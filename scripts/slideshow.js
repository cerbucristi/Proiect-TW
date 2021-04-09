var slideIndex = 0;
var time = 5000; // time for changing in ms
var auto_timeout; // timeout holder for auto change
var type_timeout;
var load_timeout;
var type_index = 0;
var txt = '';

var messages = ['Servicii de calitate', 'Comunitate stransa', 'Suport garantat'];

changeSlide();

function changeSlide() {
    slideIndex++;
    showSlides();
}

function switchSlide(n) {
    slideIndex += n;
    showSlides(false);
}

function showSlides(value) {
    var i;
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if(slideIndex < 1) {
        slideIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block";

    clearTimeout(auto_timeout);
    clearTimeout(type_timeout);
    clearTimeout(load_timeout);

    auto_timeout = setTimeout(changeSlide, time);

    document.getElementById('slideshow' + slideIndex).innerHTML = '';
    load_timeout = setTimeout(onLoad, time/5);
}

function onLoad() {
    txt = messages[slideIndex-1].toString();
    type_index = 0;

    animateText();
}

function animateText() {
    if (type_index < txt.length) {
        document.getElementById('slideshow' + slideIndex).innerHTML += txt.charAt(type_index);
        type_index++;
        type_timeout = setTimeout(animateText, time/50);
    }
}