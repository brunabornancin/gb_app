var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/gb_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db connected.');
});

var basicRouter = require('./routes/basicRoutes');
var prospectsRouter = require('./routes/prospects');
var Article = require('./models/article')
var articleRouter = require('./routes/articles');

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

app.get('/articles/', async (req, res) => {
	var articles = await Article.find().sort({createdAt: 'desc'})
	res.render('articles/index', {articles: articles})
});

app.use('/', basicRouter);
app.use('/', prospectsRouter);
app.use('/', articleRouter);

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
