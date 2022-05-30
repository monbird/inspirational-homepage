import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import {
//     setSearchTerm,
//     clearSearchTerm,
//     selectSearchTerm,
// } from './searchTermSlice.js';

export const Weather = () => {
    // const searchTerm = useSelector(selectSearchTerm);
    // const dispatch = useDispatch();

    // const onSearchTermChangeHandler = (e) => {
    //     const userInput = e.target.value;
    //     dispatch(setSearchTerm(userInput));
    // };

    // const onClearSearchTermHandler = () => {
    //     dispatch(clearSearchTerm());
    // };

    const temperature = '18.5';
    const description = 'Nice and sunny';
    const icon = 'https://cdn-icons-png.flaticon.com/512/3050/3050031.png';

    return (
        <div>
            <p>{temperature}</p>
            <p>{description}</p>
            <img src={icon} alt="temperature icon"></img>
        </div>
    );
};
