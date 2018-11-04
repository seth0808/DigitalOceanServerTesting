const express = require('express')
const mysql = require('mysql')

let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Mnuk1234!',
	database: 'name'
}); 

connection.connect(function (error) {
	if(error) {
		console.log(error);
	} else {
		console.log('Connected')
	}
}) 

const app = express(); 

app.get('/', function(req, res) {
	/*
	res.send("Hello World");
	*/
	connection.query("DESCRIBE my_table", function(error, rows, field){
		if(error){
			console.log(error)
		} else {
			res.send(rows)
		}
	})
	
});



app.listen(3000, function() {
	console.log('Server started on port 3000...')
});
