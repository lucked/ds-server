var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ds-system');

module.exports = mongoose;
