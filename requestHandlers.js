//This allows us to wire the request handlers into the router, giving our router something to route to

function start() {
    console.log("request handler 'start' was called");
}

function upload(){
    console.log("request handler 'upload' was called");
}

exports.start = start;
exports.upload = upload;