import Axios from 'axios';

const API_KEY = '57804854-ae4f724cdee310b4b8c1f8b5a';

const getImagesByQuery = async (query, page = 1) => {
    const response = await Axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`);
    return {
        hits: response.data.hits,
        totalHits: response.data.totalHits,
    };
}

export { getImagesByQuery };