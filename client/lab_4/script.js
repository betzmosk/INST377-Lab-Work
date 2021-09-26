let current_position = 0;
const slides = document.querySelectorAll('.carousel-item');
const num_slides = slides.length;
console.log(slides.length);

document.querySelector('#carousel-button-prev').addEventListener(
    'click', function(){
        moveToPreviousSlide();
    });

document.querySelector('#carousel-button-next').addEventListener(
    'click', function(){
        moveToNextSlide();
    });

function updateSlidePosition(){
    // Make all slides hidden
    for (let slide of slides){
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    // Make updated slide visible
    slides[current_position].classList.add('carousel-item-visible');
}

function moveToNextSlide(){
    // If it's the last slide
    if (current_position === num_slides-1){
        // Go to the first slide
        current_position = 0;
    } else {
        // Go to the next slide
        current_position++;
    }
    // Update slide position
    updateSlidePosition();
}

function moveToPreviousSlide(){
    // If it's the first slide
    if (current_position == 0){
        // Go to the last slide
        current_position = num_slides-1;
    } else {
        // Go to the previous slide
        current_position--;
    }
    // Update slide position
    updateSlidePosition();
}