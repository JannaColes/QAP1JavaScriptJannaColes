// The axios module is a promise-based HTTP client that helps you make HTTP requests to external resources. It provides a simple API for making asynchronous HTTP requests.

// Import the axios module
const axious = require('axios');

// Make a simple GET request to the API
axious.get('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
  // Log the data from the API
  console.log('API Response:', response.data); })

  .catch((error) => {
    // Log an error if there is one
    console.log('API Error:', error.message);
  });