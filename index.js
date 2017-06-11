var sql=require("mssql");

var dbConfig={
  server:"nuffieldhealth20170610.database.windows.net",
  database:"nuffieldhealth_db",
  user:"ucabcm2",
  passwoed:"Mct.niub74110",
  port:1433,

  options:{
    encrypt:true
  }
};

function getCustomers(){
  var conn= new sql.Connection(dbConfig);
  conn.connect()
  .then(function(){
    console.log("connected");
    conn.close();
  })
  .catch(function(err){
    console.log(err);
    conn.close();
  });

}

getCustomers();
