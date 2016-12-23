var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());

module.exports = app;

// 1955/
// 	server.js
// 	config.js
// 	schema.js
// 	routes.js
// 	utils/
// 	node_modules/
// 	package.json

// express < node
// bodyParser < node
// path < node
// app <- express
// app <- bodyParser
// app <- path
// mongoose < npm
// Schema <- mongoose
// [Table]Schema <- mongoose
// mongoose.model <- [Table]Schema
// [Table] <- mongoose
// [Table] <- mongoose.model
// [route] <- app