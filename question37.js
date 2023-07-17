"use strict";
/*37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
 that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a
 shirt of any size with a different message.*/
Object.defineProperty(exports, "__esModule", { value: true });
// User input 
var promptSync = require("prompt-sync");
var prompt = promptSync();
// Defining function
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I Love Typescript'; }
    console.log('\n Shirt is of \"' + size.toUpperCase() + '\" size.\n');
    console.log('The Message on shirt will be,\"' + message.toUpperCase() + '\".\n');
}
make_shirt(); // Function with default size and message
make_shirt('Medium'); // Function with default size of Medium and same message as of Large size
make_shirt('small', 'Pakistan Zindabad'); // Function with small size and new messaged
