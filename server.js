
var sql = require("mssql");

//Initiallising connection string
var dbConfig = {
    user:  'uabcm2',
    password: 'Mct.niub74110',
    server: 'nuffieldhealth20170610.database.windows.net',
    database: 'nuffieldhealth_db',
    options: {
      encrypt: true,
      port: 1433
    }
};

var connection = new sql.Connection(dbConfig);
connection.connect().then(function(){
  console.log("Connected!");
}).catch(function(err){
  console.log("connection failed!")
  console.log(err);
});
