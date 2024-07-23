document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
      bubble.addEventListener('mouseenter', () => {
        bubble.classList.add('expanded');
      });
      bubble.addEventListener('mouseleave', () => {
        bubble.classList.remove('expanded');
      });
    });
  });
  