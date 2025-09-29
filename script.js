document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  // optionally store preference
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  // Observe fade-in sections
  const faders = document.querySelectorAll('.section, .project-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  faders.forEach(el => observer.observe(el));
});
