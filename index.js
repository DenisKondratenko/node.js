var express = require('express');

var app = express();


app.get('/', function(req, res){
	res.send('this is home');
}); 
app.get('/test', function(req, res){
	res.send('This is news');
}); 
app.get('/test/id', function(req, res){
	res.send('ID is = ' + req.params.id);
}); 
app.listen(3000);