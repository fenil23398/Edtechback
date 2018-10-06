var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');

var labs = require('./routes/labs_router');
var companies = require('./routes/companies_router');
var images = require('./routes/images_router');
var investor = require('./routes/investor_router');
var volunteers = require('./routes/volunteers_router');
var userss = require('./routes/users_router');
var uc = require('./routes/user_companies');
var ui = require('./routes/user_investors');
var uv = require('./routes/user_vol');
var login = require('./routes/login_router')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use('/labs', labs);
app.use('/images', images);
app.use('/investor', investor);
app.use('/companies', companies);
app.use('/volunteers', volunteers);
app.use('/userss', userss);
app.use('/uc', uc);
app.use('/ui', ui);
app.use('/uv', uv);
app.use('/login', login);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-  With, Content-Type, Accept");
    next();
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