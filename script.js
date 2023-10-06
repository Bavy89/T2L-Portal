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

function openUrl(form, url) {
  var inputValue = form.T1.value.trim();
  if(inputValue === "") {
      alert("Vennligst skriv noe i søkefeltet før du søker.");
      return false;
  }
  window.open(url + inputValue);
  return false; // Prevent form submission
}

function formatText(command, button) {
  document.execCommand(command, false, '');
  updateToolbar();
}

function updateToolbar() {
  document.getElementById('bold').classList.toggle('active', document.queryCommandState('bold'));
  document.getElementById('italic').classList.toggle('active', document.queryCommandState('italic'));
  document.getElementById('underline').classList.toggle('active', document.queryCommandState('underline'));
}