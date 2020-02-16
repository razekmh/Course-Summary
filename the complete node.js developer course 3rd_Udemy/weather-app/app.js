const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Boston', (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.lat, data.lon, (error, forecastData) => {
        if (error){
            return console.log(error)
        }

        console.log(data.location)
        console.log(forecastData)
      })
})



