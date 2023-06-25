const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

function adjustEntryHeight() {
  var screenHeight = window.innerHeight;
  var entryElement = document.querySelector('.entry');
  var maxScreenHeight = 800; // Adjust as needed

  if (screenHeight <= maxScreenHeight) {
    entryElement.style.height = '300vh'; // Adjust the desired height
  } else {
    entryElement.style.height = '100vh'; // Reset to default height
  }
}

// Call the function on page load and window resize
window.addEventListener('load', adjustEntryHeight);
window.addEventListener('resize', adjustEntryHeight);





