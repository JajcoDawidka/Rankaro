document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slider-track img');

    let index = 0;
    const visibleSlides = 4;
    const totalSlides = slides.length;

    function moveSlider() {
        index++;

        if (index > totalSlides - visibleSlides) {
            index = 0;
        }

        track.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
    }

    setInterval(moveSlider, 5000);
});

const btn = document.getElementById('read-more-btn');
const fullText = document.getElementById('full-text');

btn.addEventListener('click', () => {
    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        btn.textContent = 'Read Less';
    } else {
        fullText.style.display = 'none';
        btn.textContent = 'Read More';
    }
});

