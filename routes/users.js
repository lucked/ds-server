var express = require('express');
var router = express.Router();

var user = require('../models/user');

router.route('/')
	.get(function(req, res) {
		var response = {};
		user.find({}, function(err, data) {
			if(err) {
				response = {'error': true, 'message': 'Error fecthing data.'};
			} else {
				response = {'error': false, 'message': data};
			}
			res.json(response);
		});
	})
	.post(function(req, res) {
		var db = new user();
		var response = {};
		db.email = req.body.email;
		db.password = require('crypto')
						.createHash('sha1')
						.update(req.body.password)
						.digest('base64');
		db.save(function(err) {
			if(err) {
				response = {'error': true, 'message': 'Error adding user'};
			} else {
				response = {'error': false, 'message': 'User was added'}
			}
			res.json(response);
		});
	})

router.route('/:id')
	.delete(function(req, res) {
		var response = {};
		user.findById(req.params.id, function(err, data) {
			if(err) {
				response = {'error': true, 'message': 'Error fecthing data'};
			} else {
				user.remove({_id: req.params.id}, function(err) {
					if(err) {
						response = {'error': true, 'message': 'Error deleting data'};
					} else {
						response = {'error': false, 'message': 'Data associated with ' + req.params.id + 'is deleted'};
					}
					res.json(response);
				});
			}
		});
	});

module.exports = router;
