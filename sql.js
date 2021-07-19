/*Logger*/
const logger = require('./log.js');
const fs = require('fs');

/*SQL module*/
const mysql = require('mysql');
let db; //default DB variable.

const test_sqlcon = mysql.createConnection({
	host 	 : 'localhost',
	user 	 : 'capstone',
	password : 'capstone123',
	database : 'testdb'
}) //test DB.


// Connet to the DB
function connectDB (ind){
	if(ind==='test'){ // For test
		db = test_sqlcon;
		logger.log('debug', `TEST DB connected`);
	}
	else if(ind==='rel'){ // SQL Connection object is specified in a JSON file.
		let sqlcon = JSON.parse(fs.readFile('.rmtcon.json'));
		db = mysql.createConnection(sqlcon);
		logger.log('info', `DB connected`);
	}
	else{
		return false;
	}
}

// Send a query to the DB
function query_str (str){
	if(db==undefined) return false;
	if(str==''){
		return false;
	}
	else{
		
		logger.log('info', ``);
	}
}