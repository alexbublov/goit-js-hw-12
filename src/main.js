import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, appendGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
    timeout: 3000,
    position: 'topRight',
});

let query;
let currentPage;
let totalPages;

const searchForm = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    query = searchForm.elements['search-text'].value.trim();
    if (!query) return;
    clearGallery();
    showLoader();
    currentPage = 1;
    try {
        const images = await getImagesByQuery(query, currentPage);
        totalPages = Math.ceil(images.totalHits / 15);
        if (images.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            createGallery(images.hits);
            if (currentPage < totalPages) {
                loadMoreButton.classList.remove('hidden');
            }
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: error.message,
        });
    } finally {
        hideLoader();
    }
});


loadMoreButton.addEventListener('click', async () => {
    showLoader();
    try {
        currentPage++;
        if (currentPage > totalPages) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no more images matching your search query!',
            });
            loadMoreButton.classList.add('hidden');
        } else {
            const images = await getImagesByQuery(query, currentPage);
            appendGallery(images.hits);
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: error.message,
        });
    } finally {
        hideLoader();
    }

    const galleryItem = document.querySelector('.gallery-item');
    if (galleryItem) {
        scrollBy({
            top: galleryItem.getBoundingClientRect().height * 2,
            behavior: 'smooth',
        });
    }
});
