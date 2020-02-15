const request = require('request')

const url  = 'https://api.darksky.net/forecast/9e6569dfe32bc96cea4afda998d4c974/37.8267,-122.4233?units=si'

request({url: url, json:true }, (error, response) =>{
    // console.log(response.body.currently)
    console.log(response.body.daily.data[0].summary+" It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain" )
})