document.addEventListener('DOMContentLoaded', function() {
const slidesContainer = document.querySelector('.slides');

    const moveToNextSlide = () =>{
        let currentSlide = slidesContainer.querySelector('.current-slide');
        let nextSlide = slidesContainer.querySelector('.next-slide');
        let lastSlide = slidesContainer.querySelector('.last-slide');
        if (nextSlide) {
            currentSlide.classList.remove('current-slide');
            nextSlide.classList.remove('next-slide');
            nextSlide.removeEventListener('click', moveToNextSlide)
            if (lastSlide){
                lastSlide.removeEventListener('click', moveToLastSlide)
            }
            nextSlide.classList.add('current-slide');

            if (nextSlide.nextElementSibling) {
                nextSlide.nextElementSibling.classList.add('next-slide');
                nextSlide.nextElementSibling.addEventListener('click', moveToNextSlide)
            }

            currentSlide.classList.add('last-slide');
            currentSlide.addEventListener('click', moveToLastSlide)
            lastSlide.classList.remove('last-slide');


        }
    }

    const moveToLastSlide = () => {
        let currentSlide = slidesContainer.querySelector('.current-slide');
        let nextSlide = slidesContainer.querySelector('.next-slide');
        let lastSlide = slidesContainer.querySelector('.last-slide');
    
        if (lastSlide) {
            lastSlide.removeEventListener('click', moveToLastSlide)
            lastSlide.classList.remove('last-slide');
            currentSlide.classList.remove('current-slide');
            if (nextSlide){
                nextSlide.removeEventListener('click', moveToNextSlide)
                nextSlide.classList.remove('next-slide');
            }
            lastSlide.classList.add('current-slide')
            currentSlide.classList.add('next-slide')
            currentSlide.addEventListener('click', moveToNextSlide)
            if(lastSlide.previousElementSibling){
                lastSlide.previousElementSibling.classList.add('last-slide');
                lastSlide.previousElementSibling.addEventListener('click', moveToLastSlide)
            }
        }
    }
    const prev = document.querySelectorAll('#prev');
    prev.forEach(prev => {
        prev.addEventListener('click', moveToLastSlide);
    });
    const next = document.querySelectorAll('#next');
    next.forEach(next => {
        next.addEventListener('click', moveToNextSlide);
    });
    let nextSlide = slidesContainer.querySelector('.next-slide');
    let lastSlide = slidesContainer.querySelector('.last-slide');
    nextSlide.addEventListener('click', moveToNextSlide)
    if(lastSlide){
        lastSlide.addEventListener('click', moveToLastSlide)
    }
});