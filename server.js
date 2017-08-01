//using the node module for HTTP
var http = require("http");
//creating the 2 different ports
var PORT1 = 7000;
var PORT2 = 7500;
//function that will run on port 7000
function handleRequestUno(req, res) {
	res.end("You don't suck at this...totally" + req.url);
}

//function that will run on port 7500
function handleRequestDos(req, res) {
	res.end("You are so bad at this.  I can't believe this even worked" + req.url);
}

var serverUno = http.createServer(handleRequestUno);
var serverDos = http.createServer(handleRequestDos);

serverUno.listen(PORT1, function() {
	console.log("serverUno listening on: http://localhost:%s", PORT1);
});
serverDos.listen(PORT2, function() {
	console.log("serverDos listening on: http://localhost:%s", PORT2);
});