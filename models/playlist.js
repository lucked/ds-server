var mongoose = require('./mongodb.js');

/*
{
	unit: [
		{
			mode: "single",
			duration: "2017-1-1 12:00:00 ~ 2017-1-1 18:00:00",
			element: {
				type: "video",
				layout: {
					left: 0,
					top: 0,
					width: 1080,
					height: 1920
				},
				source: [
					"/video/1.mp4"
				]
			}
		}
	]
};
*/

var playlistSchema = new mongoose.Schema({
	unit: [
		{
			mode: String,
			duration: String,
			element: {
				type: String,
				layout: {
					left: Number,
					top: Number,
					width: Number,
					height: Number
				},
				source: [String ]
			}
		}
	]
});

module.exports = mongoose.model('playlist', playlistSchema);