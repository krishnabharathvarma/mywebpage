// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close the menu after following an in-page link on small screens
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Keep the footer year current
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
