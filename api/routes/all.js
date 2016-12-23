var Person = require('../schema.js');

module.exports = function(request,response) {
	Person.find({},function(err,data) {
		response.json(data);
	})
}