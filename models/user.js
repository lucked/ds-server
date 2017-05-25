var mongoose = require('./mongodb');

var userSchema = new mongoose.Schema({
	email: String,
	password: String,
	createDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('user', userSchema);