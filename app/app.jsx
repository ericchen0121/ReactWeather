var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
// require doesn't know how to load a css file, so need css loader 'css!'
// still need to inject css into html with 'style!' style loader
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app styles
require('style!css!appStyles');


ReactDOM.render(
  <Router history={hashHistory}>
    <Router path='/' component={Main}>
      <Route path='about' component={About} />
      <Route path='examples' component={Examples} />
      <IndexRoute component={Weather} />
    </Router>
  </Router>,
  document.getElementById('app')
);
