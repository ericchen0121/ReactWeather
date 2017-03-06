var React = require('react');

var WeatherMessage = ({location, temp}) => {
  var tempInF = Math.round(temp);
  var tempInC = Math.round((temp - 32) * (5/9));
  return (
    <h3 className='text-center'>It's {tempInF}°F / {tempInC}°C in {location} ❤️️</h3>
  )
}
module.exports = WeatherMessage;
