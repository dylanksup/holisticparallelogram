var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var urlParser = require('url');
var morgan = require('morgan');
var session = require('express-session');

var app = express();
require(__dirname + '/server/db/index.js')();

var port = process.env.PORT || 4568;
var router = require(__dirname + '/server/router/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('viewFinder'));
app.use(session());
app.use(morgan('dev'));

// http://passportjs.org/docs/google
app.use(passport.initialize());

// This must be declared after the Express session is declared
app.use(passport.session());

router(app, express);

app.listen(port, function(err) {
  if (err) {
    return console.log('Listen error: ', err);
  }
  console.log('Holistic Parallelogram Listening on Port ' + port);
});


// TODO: check if below are useful for this project
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
//app.use(methodOverride('X-HTTP-Method-Override'));

// ============= Optional Mongoose/Mongo Setup ===========
/*
// Mongoose/Mongo setup. Uncomment if using Mongoose.
var mongoose = require('mongoose');
var dbUri = process.env.MONGOLAB_URI ||'mongodb://localhost/mvp';
mongoose.connect(dbUri, function(err, res) {
  if (err) {
    console.log('Mongo connection error: ', err);
  }
});
*/
