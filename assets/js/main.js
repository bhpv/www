const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#navMenu');
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.photo-card');
const year = document.querySelector('#year');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('strong');
const lightboxCategory = lightbox.querySelector('span');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const photoButtons = document.querySelectorAll('.photo-button');

if (year) year.textContent = new Date().getFullYear();

if (navToggle && navMenu) navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    cards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hide', !shouldShow);
    });
  });
});

function openLightbox(button) {
  const image = button.querySelector('img');
  const title = button.querySelector('strong').textContent;
  const category = button.querySelector('span').textContent;

  lightboxImage.src = button.dataset.large || image.src.replace(/w=1200/, 'w=1800');
  lightboxImage.alt = image.alt;
  lightboxTitle.textContent = title;
  lightboxCategory.textContent = category;
  lightbox.hidden = false;
  document.body.classList.add('lightbox-open');
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove('lightbox-open');
  lightboxImage.src = '';
}

photoButtons.forEach((button) => {
  button.addEventListener('click', () => openLightbox(button));
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
});
