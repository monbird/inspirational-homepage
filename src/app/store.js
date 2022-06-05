import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../features/quote/quoteSlice';
import weatherReducer from '../features/weather/weatherSlice';
import imageReducer from '../features/image/imageSlice';

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
        weather: weatherReducer,
        image: imageReducer,
    },
});
