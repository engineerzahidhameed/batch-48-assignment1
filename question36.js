"use strict";
/*36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
 should be printed on the shirt. The function should print a sentence summarizing the size of the shirt
 and the message printed on it. Call the function.*/
Object.defineProperty(exports, "__esModule", { value: true });
// User input 
var promptSync = require("prompt-sync");
var prompt = promptSync();
// Defining function
function make_shirt() {
    var siZe = prompt('Enter the size of your shirt (large, medium, small) :');
    if (siZe.toLowerCase() == 'large' || siZe.toLowerCase() == 'medium' || siZe.toLowerCase() == 'small') {
        var messAge = prompt('Enter message to be printed on shirt :');
        console.log('\nSize of the shirt is: \"' + siZe + '\"\nMessage on the shirt: \"' + messAge.toUpperCase() + '\".\n');
    }
    else {
        console.log('\nPlease enter the size of shirt correctly as per given options.\n');
    }
}
make_shirt(); // Calling the function
