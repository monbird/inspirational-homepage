import React from 'react';

export const Image = () => {
    const image =
        'https://www.popsci.com/uploads/2021/06/08/bees-drinking-nectar.jpg?auto=webp';

    return (
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
        ></div>
    );
};
