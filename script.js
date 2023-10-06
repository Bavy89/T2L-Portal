//sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

//Smooth anchor link

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


//slide
let currentSlide = 1;
const totalSlides = 3;

function showSlide(slideNum) {
    document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.style.opacity = index + 1 === slideNum ? '1' : '0';
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentSlide = currentSlide % totalSlides + 1;
    showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1;
    showSlide(currentSlide);
});