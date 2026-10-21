const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Ouvre ou replie le menu sur petit écran et met à jour son état accessible.

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    menuToggle.textContent = isOpen ? '\u00D7' : '\u2630';
  });

  // Après un choix, replie le menu pour laisser la page de destination visible.

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
      menuToggle.textContent = '\u2630';
    });
  });
}

const year = document.querySelector('#year');

// Affiche automatiquement l’année courante dans le pied de page.

if (year) year.textContent = new Date().getFullYear();

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Signale la page active dans la navigation commune.

document.querySelectorAll('.nav-links a').forEach((link) => {
  if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page');
});
