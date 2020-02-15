const request = require('request')

const url  = 'https://api.darksky.net/forecast/9e6569dfe32bc96cea4afda998d4c974/37.8267,-122.4233?units=si'

request({url: url, json:true }, (error, response) =>{
    // console.log(response.body.currently)
    if (error){
        console.log('Unable to connect to weather service!')
    } else if (response.body.error){
        console.log('Unable to find location!')
    } else { 
        console.log(response.body.daily.data[0].summary+" It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain" )
    }
})


// const weatherUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmF6ZWttaCIsImEiOiJjazV0enlydGgwYmhoM2VvMGFnMHk2aHVnIn0.pRW2wS-NjvG1-Sw4sOoGEg&limit=1'

// request({url: weatherUrl, json:true}, (error, response)=> {
//     console.log(response.body.features[0].center[0] , response.body.features[0].center[1])
// })