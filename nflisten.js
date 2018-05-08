var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var process = require('process'); // process.pid
var mysql = require('mysql');
const port = 5000;
const tablename = 't' + port.toString() + process.pid.toString()

// Configure MySQL connection
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'nflistener',
	password: 'nflistener',
	database: 'nflistener'
  })

//Establish MySQL connection
connection.connect(function(err) {
   if (err)
      throw err
   else {
       console.log('>>> Connected to MySQL');

    var sql = "CREATE TABLE " + tablename + " (id INT AUTO_INCREMENT PRIMARY KEY)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(">>> Table " + tablename + " created");
    });

       // Start the app when connection is ready
       app.listen(port);
       console.log('>>> Server listening on port 3000');
    }
});

// parse application/json
app.use(bodyParser.json())

app.post('/', function(req, res) {
    var jsondata = req.body;
    var keys = [];
    var values = [];

    // get all the keys in the JSON
    for(var key in jsondata) keys.push(key);

    // get all values
    for(var i=0; i< keys.length; i++) values.push(jsondata[keys[i]])

   // print to console
   // console.log(jsondata);
   console.log(JSON.stringify(jsondata, null));

   // just call res.end(), or show as string on web
   res.send(JSON.stringify(jsondata, null, 4));
});
