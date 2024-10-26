let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}
