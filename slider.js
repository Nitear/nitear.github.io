document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');

    let current = 0;

    function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
    });

    prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
    });
});