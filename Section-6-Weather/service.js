const axios = require('axios');

const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY = 'AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM';

const getGeocodePlaceInfo = async (address) =>{
    let encodeURI = encodeURIComponent(address);
    let response =  await axios.get(`${API_URL}address=${encodeURI}&key=${API_KEY}`);

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