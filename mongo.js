const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	id: String,
	pw: String
});

user.methods.validPassword = function (password){
	// Write the code validating the password...
	
	return true
}

module.exports = mongoose.model('users', userSchema);