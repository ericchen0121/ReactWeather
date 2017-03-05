var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h3>It's {Math.round(temp)}°F in {location} :)</h3>
  )
}
module.exports = WeatherMessage;
