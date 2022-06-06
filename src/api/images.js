import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';

const getImage = async () => {
    const page = Math.floor(Math.random() * (10 - 1 + 1) + 1); // between 1-10 inclusive
    const query = `?query=nature&page=${page}&per_page=10&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
    const url = `${API_URL}${query}`;
    const response = await axios.get(url);
    const imageUrls = response.data.results.map((image) => image.urls.regular);

    return {
        imageUrls: imageUrls,
    };
};

const imagesApi = {
    getImage,
};

export default imagesApi;
