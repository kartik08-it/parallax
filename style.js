// Parallax effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll('.parallax-bg').forEach(bg => {
    const sectionTop = bg.parentElement.offsetTop;
    const offset = (scrolled - sectionTop) * 0.4;
    bg.style.transform = `translateY(${offset}px)`;
  });
});

// Intersection Observer animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.content').forEach(el => observer.observe(el));

// Stagger skill card animation
document.querySelectorAll('.skill-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
