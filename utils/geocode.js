const request = require("postman-request")

const geocode = (address , callback) => {
    const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}${process.env.MAP_BOX_URL2}`;
    request({url:url2, json: true}, (error, response) => {
        if (error) {
            callback("unable to connect to location service", undefined)
         } else if(response.body.features.length === 0){
             callback("Can't find that location")
         } else {
             callback(undefined, {
                 latitude: response.body.features[0].center[1],
                 longitude: response.body.features[0].center[0],
                 location: response.body.features[0].place_name  
             })
         }
    })
}

module.exports = geocode