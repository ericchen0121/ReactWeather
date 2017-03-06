var React = require('react');

// stateless functional components
var About = () => {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This little app was created with OpenWeatherMap's API and React.</p>
      <ul>
        <li>Check out the <a href='http://openweathermap.org/'>OpenWeatherMap</a> page.</li>
        <li>And Facebook's <a href='https://facebook.github.io/react/'>React</a> library for front-end development.</li>
        <li>Check out the <a href='https://github.com/ericchen0121/ReactWeather'>Github code</a> for this app.</li>
      </ul>
    </div>

  )
}

module.exports = About;
