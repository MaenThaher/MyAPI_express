// Script to toggle the navbar on mobile
const hamburger = document.getElementById('hamb');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});





// Get elements for the slider and buttons
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;
const totalSlides = slides.length;

// Function to move to the next slide
function goToSlide(slideIndex) {
  const slider = document.querySelector('.slider');
  // Ensure slideIndex stays within the range
  if (slideIndex < 0) {
    currentSlide = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = slideIndex;
  }
  
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Function for the "next" button
nextButton.addEventListener('click', () => {
  goToSlide(currentSlide + 1);
});

// Function for the "previous" button
prevButton.addEventListener('click', () => {
  goToSlide(currentSlide - 1);
});

// Auto-slide every 3 seconds
setInterval(() => {
  goToSlide(currentSlide + 1);
},3000);


