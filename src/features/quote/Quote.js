import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import {
//     setSearchTerm,
//     clearSearchTerm,
//     selectSearchTerm,
// } from './searchTermSlice.js';

export const Quote = () => {
    // const searchTerm = useSelector(selectSearchTerm);
    // const dispatch = useDispatch();

    // const onSearchTermChangeHandler = (e) => {
    //     const userInput = e.target.value;
    //     dispatch(setSearchTerm(userInput));
    // };

    // const onClearSearchTermHandler = () => {
    //     dispatch(clearSearchTerm());
    // };

    const quote = 'The way to get started is to quit talking and begin doing';
    const author = 'Walt Disney';

    return (
        <div>
            <p>{quote}</p>
            <p>{author}</p>
        </div>
    );
};
