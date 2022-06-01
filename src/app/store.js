import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../features/quote/quoteSlice';
import weatherReducer from '../features/weather/weatherSlice';

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
        weather: weatherReducer,
    },
});
