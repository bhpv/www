const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img');
const caption = lightbox?.querySelector('.lightbox-caption');
const closeBtn = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('.photo-card').forEach((card) => {
  card.addEventListener('click', () => {
    if (!lightbox || !lightboxImg || !caption) return;
    lightboxImg.src = card.dataset.full;
    lightboxImg.alt = card.dataset.title || '';
    caption.textContent = `${card.dataset.title || ''} · ${card.dataset.category || ''}`;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

closeBtn?.addEventListener('click', closeLightbox);

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
