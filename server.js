// //wrting a working HTTP server

// //this line requires the http module that ships w Node.js and makes it accesible through the variable
// var http = require('http');
// //then call one of the function the http module offers: createServer 
// //this function returns an obj and this obj has methods named listen 
// http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write('Hello World');
//     res.end();
//      //listen takes a numeric value which indicates the port number our server is going to listen on
// }).listen(8888);

var http = require('http');

function onRequest(req, res) {
    console.log('request receivd!');
    res.writeHead(200, {"Concept-Type": "text/plain"});
    res.write('Hello World');
    res.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started');
