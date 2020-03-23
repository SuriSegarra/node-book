
var exec = require('child_process').exec;


function start(response) {
    console.log("Request handler 'start' was called.");
    
    const body = '<html>'
    '<head>'
    '<meta http-equiv="Content-Type" '
    'content="text/html; charset=UTF-8" />'
    '</head>'
    '<body>'
    '<form action="/upload" enctype="multipart/form-data" '
    'method="post">'
    '<input type="file" name="upload" multiple="multiple">'
    '<input type="submit" value="Upload file" />'
    '</form>'
    '</body>'
    '</html>';
    
         res.writeHead(200, {"Content-Type": "text/plain"});
         res.write(stdout);
         res.end();
     }
     function upload(res) {
    console.log("Request handler 'upload' was called.");
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('hello upload');
    res.end();
}
    
exports.start = start;
exports.upload = upload;