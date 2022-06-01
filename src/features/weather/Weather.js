import React from 'react';

export const Weather = () => {
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
