const service_google_maps = require('./service_google_maps');
const service_open_weather = require('./service_open_weather');

const argv =  require('yargs').options({
    address : {
        alias : "d",
        desc : "Address to search",
        demand : true
    }
}).argv;


let getWeather = async (address) => {

    let geocodePlace = await service_google_maps.getGeocodePlaceInfo(address);
    let weatherInfo = await service_open_weather.getWeatherByGeographicCoordinates(geocodePlace.lat, geocodePlace.lng);

    return `The weather in ${geocodePlace.place_name} : 
    Temp: ${weatherInfo.main.temp} Cº
    Humidity: ${weatherInfo.main.humidity} %
    description : ${weatherInfo.weather.description}\n `;
}

getWeather(argv.address)
    .then(response => console.log(response))
    .catch(error => console.log(error));