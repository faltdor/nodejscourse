const service = require('./service');

const argv =  require('yargs').options({
    address : {
        alias : "d",
        desc : "Adress to search",
        demand : true
    }
}).argv;

service.getGeocodePlaceInfo(argv.address)
    .then(response => console.log(response))
    .catch(error => console.log(error));
