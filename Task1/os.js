// The "OS" module is a built-in module that helps you get information about your operating system. It acts like an assistant to your program. It helps you get information about your operating system, such as the hostname, the operating system type, the platform, the CPU architecture, and the amount of free memory. It also allows your program to adapt and make descriptive decisions based on the operating system.



// Import the os module
const os = require('os');

// Get the name of the operating system
const platform = os.platform();

// Get the CPU architecture
const architecture = os.arch();

// Get the amount of free memory
const freeMemory = os.freemem();

// Log the gathered information to the console
console.log('Operating System Platform: ', platform);
console.log('CPU Architecture: ', architecture);
console.log('Free System Memory: ', `${freeMemory / 1024 /1024} MB`);
