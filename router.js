//our router
function route(pathname) {
    console.log('About to route a request for ' + pathname);
    if(typeof handle[pathname] === 'funtion') {
        handle[pathname]();
    } else {
        console.log('no request handler found for' + pathname);
    }
}
exports.route = route;