import React from 'react';
import { Image } from './features/image/Image';
import { Weather } from './features/weather/Weather';
import { Goals } from './features/goals/Goals';
import { Quote } from './features/quote/Quote';
import './App.css';

function App() {
    return (
        <div>
            <Image />
            <Weather />
            <Goals />
            <Quote />
        </div>
    );
}

export default App;
