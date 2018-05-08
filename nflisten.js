var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// var process = require('process'); // process.pid
var mysql = require('mysql');

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
   // else {
   //     console.log('Connected to MySQL');
       // Start the app when connection is ready
       // app.listen(3000);
       // console.log('Server listening on port 3000');
 }
});

// parse application/json
app.use(bodyParser.json())

app.post('/', function(req, res) {
   // print to console
   console.log(req.body);

   // just call res.end(), or show as string on web
   res.send(JSON.stringify(req.body, null, 4));
});

const port = 5000;
app.listen(port);
