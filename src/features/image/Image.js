import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


// import {
//     setSearchTerm,
//     clearSearchTerm,
//     selectSearchTerm,
// } from './searchTermSlice.js';

export const Image = () => {
    // const searchTerm = useSelector(selectSearchTerm);
    // const dispatch = useDispatch();

    // const onSearchTermChangeHandler = (e) => {
    //     const userInput = e.target.value;
    //     dispatch(setSearchTerm(userInput));
    // };

    // const onClearSearchTermHandler = () => {
    //     dispatch(clearSearchTerm());
    // };

    const image =
        'https://www.popsci.com/uploads/2021/06/08/bees-drinking-nectar.jpg?auto=webp';

    return (
        <div>
            <img src={image} alt="inspirational background"></img>
        </div>
    );
};
