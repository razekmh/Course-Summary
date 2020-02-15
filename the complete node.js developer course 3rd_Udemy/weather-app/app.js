const request = require('request')

const url  = 'https://api.darksky.net/forecast/9e6569dfe32bc96cea4afda998d4c974/37.8267,-122.4233'

request({url: url}, (error, respose) =>{
    const data = JSON.parse(respose.body)
    console.log(data.currently)
})