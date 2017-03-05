var express = require('express');

var app = express();

// console.log(process.env)
const PORT = process.env.PORT || 3000; // deployment env variable (from Heroku)
//
// // express middleware
// // fix for openWeatherMap API which only works on http://, not https://
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url)
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server up at port ' + PORT)
});
