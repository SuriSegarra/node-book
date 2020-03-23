//starting out HTTP here, although(a pesar de que) the code for the server is still in our server.js

const server = require("./server");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

const handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);