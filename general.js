document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  
  const cardWidth = track.querySelector('.card').offsetWidth + 20; // szerokość + gap
  let position = 0;

  function updateButtons() {
    prevBtn.disabled = position === 0;
    const maxScroll = track.scrollWidth - carousel.querySelector('.carousel-track-wrapper').offsetWidth;
    nextBtn.disabled = Math.abs(position) >= maxScroll;
  }

  prevBtn.addEventListener('click', () => {
    if (position < 0) {
      position += cardWidth;
      track.style.transform = `translateX(${position}px)`;
      updateButtons();
    }
  });

  nextBtn.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - carousel.querySelector('.carousel-track-wrapper').offsetWidth;
    if (Math.abs(position) < maxScroll) {
      position -= cardWidth;
      track.style.transform = `translateX(${position}px)`;
      updateButtons();
    }
  });

  updateButtons(); // start
});


