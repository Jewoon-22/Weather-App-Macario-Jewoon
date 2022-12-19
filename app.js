const request = require('request')
const geoLocation = require('./utils/geoLocation')
const weather = require('./utils/weather.js')

const cityName = process.argv[2] 
if (!cityName) {
    console.log ('Provide an address') 
} else {
    geoLocation(cityName, (error, {longitude, latitude, location} = {}) => { 
        if (error) {
            return console.log(error)
        }
        weather(latitude, longitude, (error, weatherData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(weatherData)
    })
})
}
console.log(process.argv)