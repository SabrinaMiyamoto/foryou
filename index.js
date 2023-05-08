const slideItems = document.querySelectorAll(".slider > div");
let currentIndex = 0;

function nextSlide() {
  slideItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slideItems.length;
  slideItems[currentIndex].classList.add("active");
}
setInterval(nextSlide, 4000);