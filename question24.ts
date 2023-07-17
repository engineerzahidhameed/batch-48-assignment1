/*24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
import * as promptSync from 'prompt-sync';
const prompt = promptSync();

let stringTest = prompt('Enter your name in upper or lower case: '); // Case sensitive

switch (stringTest) {
    case 'zahid': {
        console.log('True, You entered your name in lower case.\n');
       
    }
    case 'ZAHID': {
        console.log('True, You entered your name in Upper case.\n');
      
    }
    default: {
        console.log('False, You have not entered your name correctly.\n');
    
    }

    }

let numberTest = prompt('Enter any number from 1 to 600):');
let n = +numberTest;
switch (n) {
    case 50: {
    
        console.log('True, number is equal to 50.', n);
        break;
    }

}
if (n>500) {
    console.log('True, number is greater than 500.', n);
}
else if (n>=300) {
    console.log('True, number is greater or equal to 300.', n);
} 
else if (n<100) {
    console.log('True, number is less than 100.', n);
}
else if (n>=101 || n<=299) {
    console.log('True, number is less than or equal to 299.', n);
}
else if (n==100 && n>=0) {
    console.log('True, number is greater than zero and less than 100.', n);
}
