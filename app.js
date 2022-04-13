const request = require("postman-request")
require('dotenv').config()
const url = process.env.WEATHER_STACK_URL;

request({url: url, json: true}, (error, response)=>{
    
    if(error){
        console.log("Unable to connect to weather service!")
    } else if (response.body.error){
        console.log("Unable to find location")
        
    } else {
        const temp = response.body.current.temperature
        const feelslike = response.body.current.feelslike
        const description = response.body.current.weather_descriptions[0]
        console.log(`${description}. It is currently ${temp} degrees out. It feels like ${feelslike} degrees out.`)
    }
})

const map_box_url = process.env.MAP_BOX_URL;

request({url: map_box_url , json: true}, (error, response)=>{
    if(error){
        console.log("You aint connected bro!")
    } else if (response.body.features.length === 0){
        console.log('we cant find dat location, sorry!')

    } else {
        const lon = response.body.features[0].center[0]
        const lat = response.body.features[0].center[1]
        console.log(lat,lon)

    }
})