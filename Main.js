window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Estado inicial desde localStorage
(function () {
  const saved = localStorage.getItem('theme') || 'light'; // arranca en light si no hay nada
  document.documentElement.setAttribute('data-bs-theme', saved);
})();

// Handler del botón
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.theme-toggle-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-bs-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', next);
    localStorage.setItem('theme', next);
  });
});