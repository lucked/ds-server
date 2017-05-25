var express = require('express');
var router = express.Router();
var path = require('path');

var terminal = require('../models/terminal');


/* GET home page. */
router.get('/', function(req, res, next) {
	res.end();
});


router.route('/api/terminal')
	.get(function(req, res) {
		res.send('/api/terminal');
	})
	.post(function(req, res) {
		res.send('/api/terminal');
	});


router.post('/api/upload', function(req, res) {
	res.send('/api/upload');
});

router.post('/api/broadcast', function(req, res) {
	res.send('/api/broadcast');
})

module.exports = router;
