import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, appendGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions.js';
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
    hideLoadMoreButton();

    query = searchForm.elements['search-text'].value.trim();
    if (!query) return;
    clearGallery();
    showLoader();
    currentPage = 1;
    try {
        const images = await getImagesByQuery(query, currentPage);
        totalPages = Math.ceil(images.totalHits / 15);
        if (totalPages === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            createGallery(images.hits);
            if (currentPage < totalPages) {
                showLoadMoreButton();
            } else {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no more images matching your search query!',
                });
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
    currentPage++;
    try {
        const images = await getImagesByQuery(query, currentPage);
        appendGallery(images.hits);
        console.log(currentPage, totalPages);
        if (currentPage === totalPages) {
            hideLoadMoreButton();
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no more images matching your search query!',
            });
        }
    } catch (error) {
        hideLoadMoreButton();
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
