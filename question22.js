/*22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program*/
//import * as promptSync from 'prompt-sync';
//const prompt = promptSync();
var numBers = [1, 45, 32, 98, 76];
//for (var u = 5; u<=10; u++){   // u shows index of array from 5 to 10 whereas numBers index is 0 to 4.
for (var u = 0; u <= 4; u++) {
    console.log(numBers[u] % 4); // Calculates modulo but gives output of NaN as index u is out of range
    // to correct the index, value of u be 0 to 4.
    console.log();
}
