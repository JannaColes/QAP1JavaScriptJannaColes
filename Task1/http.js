// The "http" module  is an absolute must for creating websites with Node.js. It assists you in creating a server that can listen to messages from a user who enters them. These messages or instructions are written in a callback function that uses two arguments (request and response). They handle the information that is sent to the server and produce results that are sent back to the user. 



// Import the http module
const http = require('http');

// Create an HTTP server using the createServer method
const server = http.createServer((req, res) => {
// The callback function uses two arguments (request and response). They handle the information that is sent to the server and produce results that are sent back to the user.

// Set the response header with HTTP status and Content type
  res.writeHead(200, {'Content-Type' : 'text/plain'});

  // Send the response body "QAP 1 JavaScript-Janna Coles!" using the end method
  res.end('QAP 1 JavaScript 2024-Janna Coles!\n');
});

// Make the server listen to requests on port 3000
server.listen(3000, () => {
  // Callback triggered when server is successfully listening. Hurray!
  console.log('Server running at http://localhost:3000/');
});