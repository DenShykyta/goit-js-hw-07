import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({original,preview,description})=> {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
    }).join('');
}

// console.log(createGalleryMarkup(galleryItems));
// console.log(galleryContainer);

galleryContainer.addEventListener('click', onImageClick);
function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  };

  basicLightbox.create(`
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`).show();

  // console.log(e.target.dataset.source);
  // console.log(e.currentTurget);

};
