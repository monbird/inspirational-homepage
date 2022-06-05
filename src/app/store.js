import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../features/quote/quoteSlice';
import weatherReducer from '../features/weather/weatherSlice';
import imageReducer from '../features/image/imageSlice';
import golasReducer from '../features/goals/goalsSlice';

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
        weather: weatherReducer,
        image: imageReducer,
        goals: golasReducer,
    },
});
