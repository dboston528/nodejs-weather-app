

const request = require("postman-request")
const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_KEY}&query=${longitude},${latitude}&units=f`;
    request({url: url, json: true}, (error, response)=>{
    
        if(error){
            callback("Unable to connect to location service", undefined)
        } else if (response.body.error){
            console.log(latitude,longitude)
            callback("Unable to connect to location service", undefined)
            
        } else {
            const temp = response.body.current.temperature
            const feelslike = response.body.current.feelslike
            const description = response.body.current.weather_descriptions[0]
            callback( undefined, `${description}. It is currently ${temp} degrees out. It feels like ${feelslike} degrees out.`)
        }
    })
}



module.exports = forecast