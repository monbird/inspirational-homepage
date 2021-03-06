import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import weatherApi from '../../api/weather.js';

// Thunk
export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    weatherApi.getWeather
);

// Slice Object
const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {
            temperature: '',
            description: '',
            icon: '',
        },
        status: {
            isLoading: false,
            hasError: false,
        },
    },
    // no reducers
    extraReducers: {
        [fetchWeather.pending]: (state) => {
            state.status.isLoading = true;
            state.status.hasError = false;
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.weather.temperature = action.payload.temperature;
            state.weather.description = action.payload.description;
            state.weather.icon = action.payload.icon;
            state.status.isLoading = false;
            state.status.hasError = false;
        },
        [fetchWeather.rejected]: (state) => {
            state.status.isLoading = false;
            state.status.hasError = true;
        },
    },
});

// Selectors
export const selectWeather = (state) => state.weather.weather;
export const selectWeatherStatus = (state) => state.weather.status;

// Reducer
export default weatherSlice.reducer;
