//starting out HTTP here, although(a pesar de que) the code for the server is still in our server.js

var server = require('./server');
var router = require('./router');
server.start(router.route);