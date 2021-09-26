import './sass/main.scss';

import { galleryItems } from './js/galleryItems';
import { refs } from './js/refs';
import { createGallery } from './js/createGallery';

const { gallery, lightbox, overlay, lightboxImg, closeModalBtn } = refs;

// Создаем разметку
const markup = galleryItems.map(item => createGallery(item)).join('');
gallery.insertAdjacentHTML('beforeend', markup);

// Реализация делегирования на галерее
const openModal = event => {
  event.preventDefault();

  if (event.target === event.currentTarget) return;

  lightbox.classList.add('is-open');
  lightboxImg.src = event.target.getAttribute('data-source');
  lightboxImg.alt = event.target.alt;

  window.addEventListener('keydown', onPressESC);
  gallery.addEventListener('keydown', onArrowPress);
};

const closeModal = () => {
  lightbox.classList.remove('is-open');
  lightboxImg.src = '';
  lightboxImg.alt = '';

  window.removeEventListener('keydown', onPressESC);
  gallery.removeEventListener('keydown', onArrowPress);
};

const onOverlayClick = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const onPressESC = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

const onArrowPress = event => {
  let activeIdx = galleryItems.findIndex(image => image.original === lightboxImg.src);

  if (event.code === 'ArrowRight') {
    // if (activeIdx < galleryItems.length - 1) {
    //   activeIdx += 1;
    // }
    activeIdx < galleryItems.length - 1 ? (activeIdx += 1) : 0;
  }

  if (event.code === 'ArrowLeft') {
    // if (activeIdx > 0) {
    //   activeIdx -= 1;
    // }

    activeIdx > 0 ? (activeIdx -= 1) : galleryItems.length - 1;
  }

  lightboxImg.src = galleryItems[activeIdx].original;
  lightboxImg.alt = galleryItems[activeIdx].alt;
};

// Слушатели событий
gallery.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', onOverlayClick);
