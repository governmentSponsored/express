//require the express library
var express = require('express');

//calls in the application instance 
var app = express();

app.get('/', function(request, response) {
	//response.send('Hello World!');
	//both write & end are node functions
	response.write('Hello World!');
	response.end();
});

//respond with JSON
app.get('/blocks', function(request, response) {
	var blocks = ['Fixed','Movable','Rotating','banana'];
	//response.send(blocks);
	//response.json helps the response read better than send.
	response.json(blocks);
});

//respond with HTML
app.get('/blocksTwo', function(request, response) {
	var blocks = '<ul><li>stanimal</li></ul>'
	//send some html, not typically done with express. Look into EJS or Jade to do this type of templating HTML.
	response.send(blocks);
});

//redirect to relative path
app.get('/blocksThree', function(request, response) {
	var blocks = '<ul><li>stanimal</li></ul>'
	//will show a 302 Moved Temporarily
	//add 301 argument to permanently redirect: redirect(301,'/parts')
	response.redirect('/parts');
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});