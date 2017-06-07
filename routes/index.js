var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressdfsfadfs' });
});

module.exports = router;

//insert data into database
var Connection=require('tedious').Connection;
var Request=require('tedious').Request;

var config={
  userName:'ucabcm2',
  password:'Mct.niub74110',
  server:'http://nuffhealthproject.azurewebsites.net',
  options:{
    database:'nuffhealth_DB'
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
