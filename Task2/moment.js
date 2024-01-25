// The moment module is a third-party module that helps you work with dates and times. It is a great example of a third-party module.

// Import the moment module
const moment = require('moment');

// Get the current date and time using moment
const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

// Display the current date and time
console.log('Current Date and Time: ', currentDateTime);