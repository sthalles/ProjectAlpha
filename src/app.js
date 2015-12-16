var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

// initialize mongoose schemas
require('./models/models.js');

// load the auth-blocker middleware
var midBlocker = require('./middleware/auth-blocker');

var routes = require('./routes/index');
var users = require('./api/users');
var projects = require('./api/projects');
var sprints = require('./api/sprints');
var stories = require('./api/stories');
var tasks = require('./api/tasks');
var authenticate = require('./api/authenticate')(passport);

// load mongodb midlleware module
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mantisdb'); // connects to Mongodb

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(session({
  // The session manager uses a secret to maintain sessions. In practice,
  // you should keep this secret value outside of your code repository
  // in an environment variable.
  secret: 'keyboard cat'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

// the auth API must be used before the data APIs;
app.use('/auth', authenticate);
app.use('/', routes);

// this middleware must be here, after routes and before the apis
app.use('/', midBlocker);

app.use('/users', users);
app.use('/projects', projects);
app.use('/sprints', sprints);
app.use('/stories', stories);
app.use('/tasks', tasks);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Initialize Passport
var initPassport = require('./passport-init');
initPassport(passport);

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


/**
 * Exporting app
 */
module.exports = app;
