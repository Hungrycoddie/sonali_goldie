const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function showImage(index) {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(${-index * width}px)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});




function ar (a, b ) {
    return a+b

}


ar(5, 6)