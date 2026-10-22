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

// Affiche chaque photo de la galerie en entier dans une fenêtre modale accessible.
const galleryButtons = document.querySelectorAll('.gallery-open');

if (galleryButtons.length && typeof HTMLDialogElement !== 'undefined') {
  const photoDialog = document.createElement('dialog');
  photoDialog.className = 'photo-lightbox';
  photoDialog.setAttribute('aria-label', 'Photo de réalisation agrandie');
  photoDialog.innerHTML = `
    <button class="photo-lightbox-close" type="button" aria-label="Fermer la photo">&times;</button>
    <img class="photo-lightbox-image" alt="">
    <p class="photo-lightbox-caption"></p>
  `;
  document.body.append(photoDialog);

  const dialogImage = photoDialog.querySelector('.photo-lightbox-image');
  const dialogCaption = photoDialog.querySelector('.photo-lightbox-caption');
  const closePhoto = photoDialog.querySelector('.photo-lightbox-close');

  galleryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const photo = button.querySelector('.gallery-photo');
      dialogImage.src = photo.currentSrc || photo.src;
      dialogImage.alt = photo.alt;
      dialogCaption.textContent = photo.alt;
      photoDialog.showModal();
      closePhoto.focus();
    });
  });

  closePhoto.addEventListener('click', () => photoDialog.close());

  // Un clic sur le fond sombre ferme aussi la fenêtre.
  photoDialog.addEventListener('click', (event) => {
    if (event.target === photoDialog) photoDialog.close();
  });

  photoDialog.addEventListener('close', () => {
    dialogImage.removeAttribute('src');
  });
} else {
  // Ouvre le fichier original dans un nouvel onglet si les fenêtres modales ne sont pas prises en charge.
  galleryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const photo = button.querySelector('.gallery-photo');
      window.open(photo.src, '_blank', 'noopener');
    });
  });
}
