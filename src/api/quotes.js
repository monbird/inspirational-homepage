import axios from 'axios';

const API_URL = `https://quotes.rest/qod?language=en`;

const getQuote = async () => {
    const response = await axios.get(API_URL);
    const quote = response.data.contents.quotes[0];

    return {
        message: quote.quote,
        author: quote.author,
    };
};

const quotesApi = {
    getQuote,
};

export default quotesApi;
