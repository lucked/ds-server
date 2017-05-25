var mongoose = require('./mongodb');

//var aterm = {mac : '00-11-22-33-44-55', id : '123456', direct : 'vertical', version : 'V8-S628G01-LF1V001'};

var terminalSchema = new mongoose.Schema({
	mac: String,
	id: String,
	direct: String,
	version: String,
	createDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Terminal', terminalSchema);