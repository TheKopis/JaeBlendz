// JavaScript placeholder for future functionality (like booking form, gallery enhancements, etc.)
document.querySelector('.book-btn').addEventListener('click', () => {
    window.location.href = 'https://jaeblendzzz.square.site';
  });
window.addEventListener('scroll', () => {
    const fadeInSection = document.querySelector('.fade-in');
    const sectionPosition = fadeInSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;  // Adjust this value to fine-tune when animation should trigger
  
    if (sectionPosition < screenPosition) {
      fadeInSection.classList.add('visible');
    }
  });
  document.querySelector('.instagram-logo').addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/jaeblendzzz/';
  });
  document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("haircutVideo");

    // Slow motion setting (optional)
    video.playbackRate = 1.00;  // Slows down the video to half speed

    // Play video on hover
    video.addEventListener("mouseover", function() {
        video.play();
    });

    // Pause video when mouse leaves
    video.addEventListener("mouseout", function() {
        video.pause();
    });
});
