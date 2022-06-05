import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchImage,
    selectImage,
    selectImageStatus,
    nextImage,
    previousImage,
} from './imageSlice';

export const Image = () => {
    const image = useSelector(selectImage);
    const imageStatus = useSelector(selectImageStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImage());
    }, [dispatch]);

    const handleNext = () => {
        dispatch(nextImage());
    };

    const handlePrevious = () => {
        dispatch(previousImage());
    };

    return (
        <>
            {imageStatus.hasError && (
                <p>There was a problem fetching the Image</p>
            )}
            {imageStatus.isLoading && <p>Loading Image...</p>}

            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: -1,

                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <button onClick={handlePrevious}>LEFT</button>
                <button onClick={handleNext}>RIGHT</button>
            </div>
        </>
    );
};
