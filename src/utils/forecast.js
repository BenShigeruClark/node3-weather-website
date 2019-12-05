const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/204809db6d811657cb813a0952ee0671/' + latitude + ',' + longitude
                                          // destructured shorthand for body argument
    request({ url, json: true}, (error, { body }) => {
        if (error) {
          callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
          callback('Unable to find location!', undefined)
        } else {
          console.log(body.daily.data[0])
          callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out.  The high today is " + body.daily.data[0].temperatureHigh + " with a low of " + body.daily.data[0].temperatureLow + ". There is a " + body.currently.precipProbability + "% chance of rain." + "\nThe humidity is " + body.daily.data[0].humidity + "% and the dewpoint is " + body.daily.data[0].dewPoint + " degrees. Wind speed is " + body.daily.data[0].windSpeed + " mph with cloud cover at " + body.daily.data[0].cloudCover + " oktas!") 
        }
    })
}

module.exports = forecast