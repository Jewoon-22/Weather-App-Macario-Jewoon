const request = require('request')

const geoLocation = (cityName, callback) => {
    const units ='metric';
    const apiKey = 'd124bc4f71c4cc213539e7fbb8169e10';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=`+ encodeURIComponent(cityName)+`&appid=${apiKey}&units=${units}`;

    
    request({ url, json:true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined) 
        } else if (body.name === false) {
            callback('Try another search!', undefined) 
        } else {
            callback(undefined, {
                latitude : body.coord.lat,
                longitude : body.coord.lon,
                location : body.name
            })
        }
    })
}

module.exports=geoLocation