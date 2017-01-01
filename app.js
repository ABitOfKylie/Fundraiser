var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var routes = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');

// Mongoose ODM...
var mongoose = require('mongoose');

// Connect to MongoDB...
mongoose.connect("mongodb://localhost:27017/fundraiser");

// var db = mongoose.connection;
// console.log(db, "hey you, over here");
// console.log(db);

// db.on('error', function (err) {
//   console.log('Mongoose Error: ', err);
// });

// db.once('open', function() {
//     console.log("MongoDB is connected!!!!!!!");
// })

// var User = require('./models/user');


var app = express();

passport.use(new GoogleStrategy({
    clientID: '1044360178305-pdp56c1v2nka3deikh4ojlhe87umjf0p.apps.googleusercontent.com',
    clientSecret: 'WlvHBkq3_Q4AjeczvKV1jN3b',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// assign the swig view engine to .html files...
var swig = require('swig');
app.engine('html', swig.renderFile);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(favicon(__dirname + '/public/animated_favicon1.gif'));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'anything'}));

require('./config/passport')(app);

app.use('/', routes);
app.use('/auth', auth);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// ******************** listener
var port = process.env.PORT || 3000;

app.listen(port, function(){
 console.log("Good things happen on Port: " + port);
 console.log('Magic happens at http://localhost:' + port);
});


module.exports = app;
