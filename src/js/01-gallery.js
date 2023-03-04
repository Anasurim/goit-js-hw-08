// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(
  ({
    preview,
    original,
    description,
  }) => `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
);

galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  enableKeyboard: true,
  captions: true,
  captionsSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

lightbox.show();
