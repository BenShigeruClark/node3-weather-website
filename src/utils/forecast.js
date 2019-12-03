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
          callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out.  There is a " + body.currently.precipProbability + "% chance of rain.")
        }
    })
}

module.exports = forecast