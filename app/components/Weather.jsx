var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(data) {
      that.setState({
        location: data.location,
        temp: data.temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({
        isLoading: false,
        errorName: errorMessage.name,
        errorMessage: errorMessage.message
      })
    })
  },
  render: function() {
    var {location, temp, isLoading, errorMessage, errorName} = this.state;

    function renderMessage() {
        if (isLoading) {
          return <h3 className='text-center'>Fetching weather...</h3>;
        } else if (temp && location) {
          return <WeatherMessage location={location} temp={temp}/>;
        }
    }

    function renderError() {
     if (typeof errorMessage === 'string') {
       return (
         <ErrorModal title={errorName} message={errorMessage}/>
       )
     }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather;
