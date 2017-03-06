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
      errorMessage: undefined,
      location: undefined,
      temp: undefined
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

  componentDidMount: function() {
    // querystring parameter of url
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; // reset the querystring to root url
    }
  },
  // when weather component is already loaded and receives new querystring
  // this will take those new props and search the location for weather
  //
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; // reset the querystring to root url
    }
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
