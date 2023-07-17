/*27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color
  alien.
*/

// For user input
import * as promptSync from 'prompt-sync';
const prompt = promptSync();

let alien_color = ['green', 'yellow', 'red'];
let aLien = prompt('Enter the color in lower case (green, yellow or red): '); // Getting user input

if (aLien!='green' && aLien!='yellow' && aLien!='red') { // Checking only green, yellow and red color entered
    console.log('\nPlease try again and enter correct color only.\n'); 
}
else if (aLien == 'green') {                    // Green color check
    console.log ('\nCongrats! You just earned 5 points.\n');
}
 
else if (aLien == 'yellow') {                   // Yellow color check
    console.log ('\nWell done! You just earned 10 points.\n');
}
else if (aLien == 'red'){                       // Red color check
    console.log('\nBravo!, you earned 15 points.\n');
}
