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


function connectDB (ind){
	if(ind==='test'){
		db = test_sqlcon;
	}
	else if(ind==='rel'){
		db = JSON.parse(fs.readFile('.rmtcon.json'));
	}
	else{
		return false;
	}
}

function query_str (str){
	if(db==undefined) return false;
	if(str==''){
		return false;
	}
	else{
		db.query('str');
	}
}