import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imagesApi from '../../api/images.js';

// Thunk
export const fetchImage = createAsyncThunk(
    'image/fetchImage',
    imagesApi.getImage
);

// Slice Object
const imageSlice = createSlice({
    name: 'image',
    initialState: {
        imageUrls: [],
        imageIndex: 0,
        status: {
            isLoading: false,
            hasError: false,
        },
    },
    reducers: {
        nextImage: (state) => {
            let newIndex = state.imageIndex + 1;

            state.imageIndex =
                newIndex >= state.imageUrls.length ? 0 : newIndex;
        },

        previousImage: (state) => {
            let newIndex = state.imageIndex - 1;

            state.imageIndex =
                newIndex < 0 ? state.imageUrls.length - 1 : newIndex;
        },
    },
    extraReducers: {
        [fetchImage.pending]: (state) => {
            state.status.isLoading = true;
            state.status.hasError = false;
        },
        [fetchImage.fulfilled]: (state, action) => {
            state.imageUrls = action.payload.imageUrls;
            state.status.isLoading = false;
            state.status.hasError = false;
        },
        [fetchImage.rejected]: (state) => {
            state.status.isLoading = false;
            state.status.hasError = true;
        },
    },
});

// Selectors
export const selectImage = (state) => {
    return state.image.imageUrls[state.image.imageIndex];
};
export const selectImageStatus = (state) => state.image.status;

// Actions
export const { nextImage, previousImage } = imageSlice.actions;

// Reducer
export default imageSlice.reducer;
