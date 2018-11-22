const axios = require('axios');
const argv =  require('yargs').options({
    address : {
        alias : "d",
        desc : "Adress to search",
        demand : true
    }
}).argv;

const api_url = 'https://maps.googleapis.com/maps/api/geocode/json?';
const api_key = 'AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM';

let encodeURI = encodeURIComponent(argv.address);

axios.get(`${api_url}address=${encodeURI}&key=${api_key}`)
.then( response => {
        let formatted_address = response.data.results[0].formatted_address;
        let location = response.data.results[0].geometry.location;
        console.log(`Formatted Address : ${formatted_address}`);
        console.log(JSON.stringify(location, undefined, 2));
        
}).catch(error => console.log(error));
