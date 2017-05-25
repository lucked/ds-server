var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
	res.send('/api/playlist');
});

router.route('/')
	.get(function(req, res) {
		
	})
	.post(function(req, res) {
		res.send('/api/playlist');
	});

module.exports = router;