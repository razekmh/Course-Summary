// const request = require('request')
// const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url  = 'https://api.darksky.net/forecast/9e6569dfe32bc96cea4afda998d4c974/37.8267,-122.4233?units=si'

// request({url: url, json:true }, (error, response) =>{
//     // console.log(response.body.currently)
//     if (error){
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error){
//         console.log('Unable to find location!')
//     } else { 
//         console.log(response.body.daily.data[0].summary+" It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain" )
//     }
// })




// geocode('Cairo', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

