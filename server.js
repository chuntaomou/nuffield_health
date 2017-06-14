
var sql = require("mssql");

//Initiallising connection string
var dbConfig = {
    user:  'ucabcm2',
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
  console.log("connected");
}).catch(function(err){
  console.log(err);
});
