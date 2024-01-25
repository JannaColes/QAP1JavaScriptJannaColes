// The "Filesystem" module acts like assistant to your program. It helps you create, read, update, and delete files. It also helps you create directories, read files, and delete directories. 


// Import the filesystem module
const fs = require('fs');

// Write a file using the writeFileSync method
fs.writeFileSync('example.text', 'This file was created by Node.js!');

// Read the file using the readFileSync method
const content = fs.readFileSync('example.text', 'utf-8');

// Log the file content to the console
console.log('File content: ', content);