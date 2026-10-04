import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const simplelightbox = new SimpleLightBox('.gallery a');
const createGallery = (images) => {
    const markup = images.map(image => `
        <li class="gallery-item">
        <a href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}" />
            <ul class="image-info">
                <li class="image-info-item"><p class="image-info-label">Likes</p>
                <p class="image-info-value">${image.likes}</p></li>
                <li class="image-info-item"><p class="image-info-label">Views</p>
                <p class="image-info-value">${image.views}</p></li>
                <li class="image-info-item"><p class="image-info-label">Comments</p>
                <p class="image-info-value">${image.comments}</p></li>
                <li class="image-info-item"><p class="image-info-label">Downloads</p>
                <p class="image-info-value">${image.downloads}</p></li>
            </ul>
        </a>
        </li>
    `).join('');
    galleryContainer.innerHTML = markup;
    simplelightbox.refresh();
}

const clearGallery = () => {
    galleryContainer.innerHTML = '';
    simplelightbox.refresh();
}
const showLoader = () => {
    loader.classList.remove('hidden');
}
const hideLoader = () => {
    loader.classList.add('hidden');
}

export { createGallery, clearGallery, showLoader, hideLoader };