var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5ba3fb629a3c7c734440a0443f021b87&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
        return {
          temp: res.data.main.temp,
          location: res.data.name
        }
    }, function(res) {
        throw new Error('Unable to fetch weather for that location: ' + res.response.data.message);
    });
  }
}
