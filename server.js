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

// var http = require('http');

// function onRequest(req, res) {
//     console.log('request receivd!');
//     res.writeHead(200, {"Concept-Type": "text/plain"});
//     res.write('Hello World');
//     res.end();
// }

// http.createServer(onRequest).listen(8888);

// console.log('Server has started');

var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        var postData = "",
        var pathname = url.parse(req.url).pathname;
        console.log('request for ' + pathname + 'received') 

        req.setEnconding("utf8");

        req.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("received POST data chunk '"+
            postDataChunk + "'.");
        });
       
        req.addListener("end", function() {
            route(handle, pathname, res, postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}
exports.start = start;