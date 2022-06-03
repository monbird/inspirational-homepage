import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchWeather,
    selectWeather,
    selectWeatherStatus,
} from './weatherSlice';

export const Weather = () => {
    const weather = useSelector(selectWeather);
    const weatherStatus = useSelector(selectWeatherStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    const icon = `img/${weather.icon}.png`;

    return (
        <>
            {weatherStatus.hasError && (
                <p>There was a problem fetching the Weather</p>
            )}
            {weatherStatus.isLoading && <p>Loading Weather...</p>}
            <div>
                <p>{weather.temperature}</p>
                <p>{weather.description}</p>
                <img src={icon} alt="temperature icon"></img>
            </div>
        </>
    );
};
