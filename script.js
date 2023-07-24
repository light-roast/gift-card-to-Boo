document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.addEventListener("change", checkAllChecked));
  });
  
  function checkAllChecked() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    const loveCard = document.getElementById("love-card");
  
    if (checkedCount === checkboxes.length) {
      loveCard.classList.remove("hidden");
    } else {
      loveCard.classList.add("hidden");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
  
    function showSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
  
  });