var Person = require('../schema.js');

module.exports = function(request,response) {
	var query = {
		name: request.params.name
	}
	Person.find(query,function(err,data) {
		if (err) {
			response.json({
				success: false,
				error: err
			})
		} else if (data.length == 0) {
			response.json({
				success: false,
				error: 'No matching record found'
			})
		} else {
			response.json({
				success: true,
				data: data
			});
		}
	})
}