const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const LOCATION_TOKEN = process.env.REACT_APP_LOCATION_TOKEN;

const getLocation = async () => {
    const url = `https://ipinfo.io/json?token=${LOCATION_TOKEN}`;
    const response = await fetch(url);
    const json = await response.json();
    const location = json.loc;

    const locationCoordiantes = location.split(',');

    const latitude = locationCoordiantes[0];
    const longitude = locationCoordiantes[1];

    return {
        lat: latitude,
        lon: longitude,
    };
};

const getWeatherApiUrl = (lat, lon) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${WEATHER_API_KEY}`;

const getWeather = async () => {
    const location = await getLocation();

    const url = getWeatherApiUrl(location.lat, location.lon);

    const response = await fetch(url);
    const weather = await response.json();

    return {
        temperature: weather.main.temp.toFixed(1),
        description: weather.weather[0].description,
        icon: weather.weather[0].icon.substr(0, 2),
    };
};

const weatherApi = {
    getWeather,
};

export default weatherApi;
