const request = require('request')
const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/9e6569dfe32bc96cea4afda998d4c974/' + encodeURIComponent(lat) + ',' + encodeURIComponent(lon) + '?units=si'
    request({ url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to location service!')
        } else if (body.error) {
            callback('Unable to find location!')
        } else {
            callback(undefined, body.daily.data[0].summary+" It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain")
        }
    })
}

module.exports = forecast