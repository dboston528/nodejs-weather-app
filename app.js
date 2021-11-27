const request = require("postman-request")

const url = 'http://api.weatherstack.com/current?access_key=1a0524bd57f10eeb53831f17ae333821&query=41.6236346,-87.6609434&units=f';

request({url: url, json: true}, (error, response)=>{
    
    if(error){
        console.log("Unable to connect to weather service!")
    } else if (response.body.error){a
        console.log("Unable to find location")
        
    } else {
        const temp = response.body.current.temperature
        const feelslike = response.body.current.feelslike
        const description = response.body.current.weather_descriptions[0]
        console.log(`${description}. It is currently ${temp} degrees out. It feels like ${feelslike} degrees out.`)
        // console.log(response)
    }


    
})


// const map_box_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ioiggghj.json?access_token=pk.eyJ1IjoiZGJvc3RvbjUyOCIsImEiOiJja3UzajFpcHkxMG84Mm9uaWRoeDg5NHZwIn0.66HPrpLNABaU0FqZ1nypag&limit=1'

// request({url: map_box_url , json: true}, (error, response)=>{
//     if(error){
//         console.log("You aint connected bro!")
//     } else if (response.body.error){
//         console.log('we caint find dat location, sorry!')

//     }else {
//         const lon = response.body.features[0].center[0]
//         const lat = response.body.features[0].center[1]
//         console.log(lat,lon)

//     }

    

    
// }) 

//Goal: Handle errors for geocoding request

// 1. Setup an error for low-level errors
// 2. Test by disabling network request and running the app
// 3. setup error handling for no matchin the app`
// 4. test by altering the search term and running the app. 
