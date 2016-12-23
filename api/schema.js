var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955');

var PersonSchema = new mongoose.Schema({
	name: String
});
mongoose.model('Person',PersonSchema);
module.exports = mongoose.model('Person');