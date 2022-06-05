import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import quotesApi from '../../api/quotes.js';

// Thunk
export const fetchQuote = createAsyncThunk(
    'quote/fetchQuote',
    quotesApi.getQuote
);

// Slice Object
const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {
            message: '',
            author: '',
        },
        status: {
            isLoading: false,
            hasError: false,
        },
    },
    // no reducers
    extraReducers: {
        [fetchQuote.pending]: (state) => {
            state.status.isLoading = true;
            state.status.hasError = false;
        },
        [fetchQuote.fulfilled]: (state, action) => {
            state.quote.message = action.payload.message;
            state.quote.author = action.payload.author;
            state.status.isLoading = false;
            state.status.hasError = false;
        },
        [fetchQuote.rejected]: (state) => {
            state.status.isLoading = false;
            state.status.hasError = true;
        },
    },
});

// Selectors
export const selectQuote = (state) => state.quote.quote;
export const selectQuoteStatus = (state) => state.quote.status;

// Reducer
export default quoteSlice.reducer;
