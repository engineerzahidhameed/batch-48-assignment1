/*28.	Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value
  for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
*/

// User input
import * as promptSync from 'prompt-sync';
const prompt = promptSync();

const oldAge = prompt('Enter age of a person in years : ');

var aGe: number = +oldAge;                      // Coverting string input to number
if (aGe < 2) {
    console.log('Person is a Baby.');           // Checking age for baby
}
else if (aGe >= 2 && aGe < 4) {                 // Checking age for toddler
    console.log('Person is a Toddler.');        
}

else if (aGe >= 4 && aGe < 13) {                // Checking age for kid
    console.log('Person is a Kid.');
}
else if (aGe >= 13 && aGe < 20) {               // Checking age for Teenager
    console.log('Person is a Teenager.');
}
else if (aGe >= 20 && aGe < 65) {               // Checking for Adult
    console.log('Person is an Adult.')
}
else if (aGe >= 65) {                           //Checking for Elder
    console.log('Person is an Elder')
}