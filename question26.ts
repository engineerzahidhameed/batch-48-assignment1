/*26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else 
  chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting 
  the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/

// For user input
import * as promptSync from 'prompt-sync';
const prompt = promptSync();

let alien_color = ['green', 'yellow', 'red'];
let aLien = prompt('Enter the color in lower case (green, yellow or red): '); // Getting user input

if (aLien!='green' && aLien!='yellow' && aLien!='red') {
    console.log('\nPlease try again and enter correct color only.\n');
}
else if (aLien == 'green') { 
    console.log ('Congrats! You just earned 5 points.');
}
    
else { 
    console.log('Bravo!, you earned 10 points.');
}
