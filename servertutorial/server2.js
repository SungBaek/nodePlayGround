var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response, next){
	console.log('user called the profile page!');
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Welcome to the profile page!");
	response.end();
}

app.use('/profile', profile);

http.createServer(app).listen(13000);
console.log("Server is running");
