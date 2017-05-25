var express = require('express');
var router = express.Router();

var playlists = require('../models/playlist');

// /api/playlists?uid=001&mac=00-11-22-33-44-55

router.route('/')
	.get(function(req, res) {
		var response = {};
		if(req.query.uid && req.query.mac) {
			response = {'error': false, 'message': {'uid': req.query.uid, 'mac': req.query.mac}};
			res.json(response);
		} else {
			playlists.find({}, function(err, data) {
				if(err) {
					response = {'error': true, 'message': 'Error fecthing data.'};
				} else {
					response = {'error': false, 'message': data};
				}
				res.json(response);
			});
		}
	})
	.post(function(req, res) {
		res.send('/api/playlist');
	});

module.exports = router;