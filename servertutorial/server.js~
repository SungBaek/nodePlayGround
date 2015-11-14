var http = require('http');
var connect = require('connect');
var fs = require('fs');

//function example for senidng a simple text.
//to use it pass it as a parameter to createServer
function onRequest(request, response){
	console.log("A user made request" + request.url);
	response.writeHead(200, {"context-type": "text/plain"});
	response.write("This is my desire");
	//response is ending let us send it
	response.end();
}

//function example for sending a simple html file
function sendFile(request, response){
	console.log('example for sending file");
	response.writeHead(200, {"context-type": "text/html"});
	//create a stream to send a file because we don't know how big it is
	//then send the stream through a pipe called response
	fs.createReadStream("./index.html").pipe(response);
	//we don't need to do response.close??
}

//uses connect module
var app = connect();

function middleWare(request, response, next){
//what is next? we can have a stack of middle ware
//why is taht good?
//request, response is straight forward
	console.log("request has been made, sire");
	next();//need to call this to trigger the next function in stack
}

function middleWare2(request, response, next){
	console.log("next oneee");
	next();
}


//sets middle ware
//the stack of middlewares
app.use(middleWare);
app.use(middleWare2);

http.createServer(app).listen(13000);
console.log("Server is now running...");
