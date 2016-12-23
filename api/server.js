var app = require('./config.js');

require('./schema.js');

require('./routes.js')(app);

var port = 5000;
app.listen(port, function() {
	console.log("listening on port",port);
})