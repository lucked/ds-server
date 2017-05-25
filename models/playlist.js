var mongoose = require('./mongodb.js');

/*
{"uni":[{"mod": "cycle","dur": "2017-1-1 12:00:00 ~ 2017-1-1 18:00:00","ele":[{"typ":"video","siz":{"l":0,"t": 0,"w":1080,"h":1920},"url":["/video/1.mp4"]}]}]}
*/

var playlistSchema = new mongoose.Schema({
	uni: [
		{
			mod: String,
			dur: String,
			ele: [
				{
					typ: String,
					siz: {
						l: Number,
						t: Number,
						w: Number,
						h: Number
					},
					url: [String]
				}
			]
		}
	]
});

module.exports = mongoose.model('playlist', playlistSchema);