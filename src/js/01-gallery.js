import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems); 

const gallery = document.querySelector(".gallery");

console.log(gallery);

const markup = galleryItems.map(({preview, original, description}) => `<div class="gallery__item">
<a class="gallery__link" href=${original}>
   <img class="gallery__image" src=${preview} alt=${description} />
</a>
</div>`).join('');

gallery.insertAdjacentHTML("beforeend", markup);


// Додавання модального вікна

// const lightbox = new SimpleLightbox('.gallery a');

new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay: 250,
});