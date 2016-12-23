var Person = require('../schema.js');

module.exports = function(request,response) {
	var new_Person = new Person({
		name: request.params.name
	})
	new_Person.save(function(err) {
		if (err) {
			response.json({
				success: false,
				error: err
			})
		} else {
			response.json({
				success: true,
				added: new_Person,
				time: new Date()
			})
		}
	})
}