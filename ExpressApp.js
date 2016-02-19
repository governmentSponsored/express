//require the express library
var express = require('express');

//calls in the application instance 
var app = express();

/*
app.get('/', function(request, response) {
	//response.send('Hello World!');
	//both write & end are node functions
	response.write('Hello World!');
	response.end();
}); 
*/

app.get('/blocks', function(request, response) {
	var blocks = ['Fixed','Movable','Rotating','banana'];
	//response.send(blocks);
	//response.json helps the response read better.
	response.json(blocks);
});

app.get('/blocksTwo', function(request, response) {
	var blocks = '<ul><li>stanimal</li></ul>'
	//response.send(blocks);
	//response.json helps the response read better.
	response.json(blocks);
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});