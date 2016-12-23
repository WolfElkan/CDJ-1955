var app = require('./config.js');
require('./schema.js');

app.get('/',require('./routes/all.js'));
app.get('/new/:name/',require('./routes/new.js'))
app.get('/remove/:name/',require('./routes/remove.js'))
app.get('/:name',require('./routes/single.js'))

// require('./routes.js')(app);

var port = 5000;
app.listen(port, function() {
	console.log("listening on port",port);
})