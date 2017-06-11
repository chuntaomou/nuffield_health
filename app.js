var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
///////////////////////////////////////////////
//insert data into database
var Connection=require('tedious').Connection;
var Request=require('tedious').Request;

var config={
  userName:'ucabcm2',
  password:'Mct.niub74110',
  server:'nuffieldhealth20170610.database.windows.net',
  options:{
    database:'nuffieldhealth_db'
  }
}
var connection=new Connection(config);
connection.on('connect',function(err){
  if(err){
    console.log(err)
  }
  else{
    insertIntoDatabase()
  }
});

function insertIntoDatabase(){
  console.log('insert row into databse');
  request=new Request(
    "insert into staff (staffName) values ('neeb')",
    function(err){}
  );
  connection.exeSql(request);
}
///////////////////////////////////////////////
module.exports = app;
