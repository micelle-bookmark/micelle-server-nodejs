
var express = require('express');

var app = express();


var loader = rootRequire('loader');
var files = loader.loader(__dirname);
console.log("console", files);

app.use('/user', rootRequire('user/router'));


module.exports = app
