document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * (100 / totalSlides);
        carousel.style.transform = `translateX(${offset}%)`;
    }

    document.getElementById("back-button").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    document.getElementById("forward-button").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    updateCarousel();
});
