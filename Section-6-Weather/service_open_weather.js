const axios = require('axios');
const API_KEY = require('./config').OPEN_WEATHER_KEY;
const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const getWeatherByGeographicCoordinates = async (lat, lng) =>{
    let response;

    try {
        response =  await axios.get(`${OPEN_WEATHER_API_URL}&lat=${lat}&lon=${lng}&&units=metric&appid=${API_KEY}`);
    } catch (error) {
        throw new Error(`Some problem has occurred invoking OpenWeatherMap API : ${error.response.status} : ${error.response.statusText}`);
    }

    return {
        main : response.data.main,
        weather : response.data.weather[0],
    }
}

module.exports = { getWeatherByGeographicCoordinates }