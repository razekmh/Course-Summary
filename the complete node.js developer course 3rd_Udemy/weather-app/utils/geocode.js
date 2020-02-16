const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicmF6ZWttaCIsImEiOiJjazV0enlydGgwYmhoM2VvMGFnMHk2aHVnIn0.pRW2wS-NjvG1-Sw4sOoGEg&limit=1'
    request({url, json:true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to location service!')
        } else if (body.features.length === 0){
            callback("No match found!")
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                lon: body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode