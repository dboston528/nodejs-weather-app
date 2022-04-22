const request = require("postman-request")
const encodedURIComponent = require
require('dotenv').config()
// const url = process.env.WEATHER_STACK_URL;

// request({url: url, json: true}, (error, response)=>{
    
//     if(error){
//         console.log("Unable to connect to weather service!")
//     } else if (response.body.error){
//         console.log("Unable to find location")
        
//     } else {
//         const temp = response.body.current.temperature
//         const feelslike = response.body.current.feelslike
//         const description = response.body.current.weather_descriptions[0]
//         console.log(`${description}. It is currently ${temp} degrees out. It feels like ${feelslike} degrees out.`)
//     }
// })

// const map_box_url = process.env.MAP_BOX_URL;

// request({url: map_box_url , json: true}, (error, response)=>{
//     if(error){
//         console.log("You aint connected bro!")
//     } else if (response.body.features.length === 0){
//         console.log('we cant find dat location, sorry!')

//     } else {
//         const lon = response.body.features[0].center[0]
//         const lat = response.body.features[0].center[1]
//         console.log(lat,lon)

//     }
// })

const geocode = (address , callback) => {
    const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}${process.env.MAP_BOX_URL2}`;
    console.log(url2)
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

geocode('Chicago', (error, data) => {
    console.log('Error', error)
    console.log("Data", data)
})