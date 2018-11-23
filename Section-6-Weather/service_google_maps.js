const axios = require('axios');
const API_KEY = require('./config').API_GOOCODE_KEY;
const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

const getGeocodePlaceInfo = async (address) =>{
    let encodeURI = encodeURIComponent(address);
    let response =  await axios.get(`${API_URL}address=${encodeURI}&key=${API_KEY}`);

    if(response.data.status === 'REQUEST_DENIED'){
        throw new Error(`Error invoking googleapis geocode : ${response.data.status} : ${response.data.error_message}`);
    }

    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error(`Not data found for ${address}`);
    }

    return {
        place_name : response.data.results[0].formatted_address,
        lat : response.data.results[0].geometry.location.lat,
        lng : response.data.results[0].geometry.location.lng
    }
}

module.exports = { getGeocodePlaceInfo }