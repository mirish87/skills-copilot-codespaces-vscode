// Create web server
// Run: node comments.js
// Browser: http://localhost:8080
// Browser: http://localhost:8080/comments.html

var http = require('http');
var fs = require('fs');

// Create HTTP server
var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    // Check request URL
    if (req.url === '/home' || req.url === '/') {
        // Set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Read file
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        // Set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Read file
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/comments') {
        // Set response header
        res.writeHead(200, {'Content-Type': 'application/json'});
        // Create JSON object
        var comments = [
            {name: 'John', age: 25},
            {name: 'Jane', age: 28},
            {name: 'Sara', age: 21}
        ];
        // Write JSON object to response
        res.end(JSON.stringify(comments));
    } else {
        // Set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Read file
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

// Listen to port 8080
server.listen(8080, '