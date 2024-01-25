// Using the "events" module in Node.js allows your program to respond to things that happen in the system. For example, when a file has been opened or closed, or when a network connection has been established. It provides the "EventEmitter" class that helps manage events and listeners. 



// Import the events module
const EventEmitter = require('events');

// Create an EventEmitter object
const myEmitter = new EventEmitter();

// Register a listener for the customEvent
myEmitter.on('customEvent', (arg) => {

  // Callback function for the customEvent
  console.log(`Event occurred with argument: ${arg}`);
});

// Emit the customEvent with a string argument
myEmitter.emit('customEvent', 'Sample Argument JavaScript');