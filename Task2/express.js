// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is my first Node app!');
});

// Specify the port number
const port = 3000;

// Start listening to requests
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});