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




