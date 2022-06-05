import axios from 'axios';

const API_URL = `https://api.unsplash.com/search/photos?query=nature&page=1&per_page=10&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;

const getImage = async () => {
    const response = await axios.get(API_URL);
    const imageUrls = response.data.results.map((image) => image.urls.regular);

    return {
        imageUrls: imageUrls,
    };
};

const imagesApi = {
    getImage,
};

export default imagesApi;
