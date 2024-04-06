
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let slideIndex = 0;
let x = setInterval(nextSlide, 3000);

function showSlides() {
  slides.forEach((slide, index) => {
    let position = index - slideIndex;
    slide.style.transform = `translateX(${position * 100}%)`;
  });
}

function prevSlide() {
  slideIndex--;
  if (slideIndex >= 0) {
    showSlides();
  } else {
    slideIndex = totalSlides - 1;
    showSlides();
  }
}

function nextSlide() {
  slideIndex++;
  if (slideIndex < totalSlides) {
    showSlides();
  } else {
    slideIndex = 0;
    showSlides();
  }
}
