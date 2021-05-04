var mysql = require('mysql');
var db;
var test_sqlcon = mysql.createConnection({
	host 	 : 'localhost',
	user 	 : 'capstone',
	password : 'capstone123',
	database : 'testdb'
})

function connectDB (ind){
	if(ind==='test'){
		db = test_sqlcon;
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