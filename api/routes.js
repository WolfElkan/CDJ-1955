require('./config.js');
var Person = require('./schema.js');

module.exports = function(app) {
	// serve up the full collection of people born in 1955
	app.get('/',function(request,response) {
		Person.find({},function(err,data) {
			response.json(data);
		})
	})

	// add a name into the database. can be used for 
	// blank spaces, so adding Steve Jobs to our database, 
	// you'd type in the URL 'localhost:8000/new/Steve Jobs'
	app.get('/new/:name/',function(request,response) {
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
	})

	// delete a name from the database.
	app.get('/remove/:name/',function(request,response) {
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
				var condemned = data;
				Person.remove(query,function(err) {
					if (err) {
						response.json({
							success: false,
							error: err
						})
					} else {
						response.json({
							success: true,
							removed: condemned,
							time: new Date()
						})
					}
				})
			}
		})
	})

	// bring up the document of that particular person.
	app.get('/:name',function(request,response) {
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
	})
}
