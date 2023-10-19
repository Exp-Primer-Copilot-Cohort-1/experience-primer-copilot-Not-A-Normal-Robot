// Create a basic web server
// Run it by typing: node comments.js
// Load http://localhost:3000 in your browser and see the result
// Stop the server with CTRL+C

// Load the http module to create an http server.
var http = require('http');
var comments = require('./comments.json');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end(JSON.stringify(comments));
});