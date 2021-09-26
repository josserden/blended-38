import './sass/main.scss';

import { galleryItems } from './js/galleryItems';
import { refs } from './js/refs';
import { createGallery } from './js/createGallery';

const { gallery, lightbox, overlay, lightboxImg, closeModalBtn } = refs;

// gallery.innerHTML = galleryItems.map(item => createGallery(item)).join('');

const markup = galleryItems.map(item => createGallery(item)).join('');

gallery.insertAdjacentHTML('beforeend', markup);
