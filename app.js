var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/gb_app', {
    useNewUrlParser: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db connected.');
});

var indexRouter = require('./routes/index');
var accountsRouter = require('./routes/accounts');
var gb_yycRouter = require('./routes/gb_yyc');
var contactRouter = require('./routes/contact');
var instructorsRouter = require('./routes/instructors');
var adultsRouter = require('./routes/adults');
var kidsRouter = require('./routes/kids');
var privatelessonsRouter = require('./routes/privatelessons');
var eventsRouter = require('./routes/events');
var galleryRouter = require('./routes/gallery');
var scheduleRouter = require('./routes/schedule');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', accountsRouter);
app.use('/', gb_yycRouter);
app.use('/', instructorsRouter);
app.use('/', adultsRouter);
app.use('/', kidsRouter);
app.use('/', privatelessonsRouter);
app.use('/', eventsRouter);
app.use('/', galleryRouter);
app.use('/', contactRouter);
app.use('/', scheduleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
