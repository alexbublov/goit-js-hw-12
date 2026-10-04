import Axios from 'axios';

const API_KEY = '57804854-ae4f724cdee310b4b8c1f8b5a';

const getImagesByQuery = (query) => {
    return Axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => response.data.hits);
}

export { getImagesByQuery };