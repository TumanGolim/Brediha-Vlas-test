let currentStep = 1;

function nextStep() {
  document.getElementById("step" + currentStep).style.display = "none";
  currentStep++;
  document.getElementById("step" + currentStep).style.display = "block";
}

function prevStep() {
  document.getElementById("step" + currentStep).style.display = "none";
  currentStep--;
  document.getElementById("step" + currentStep).style.display = "block";
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

let isMuted = false;

function toggleMute(muteButton) {
  muteButton.classList.toggle("muted");
}
