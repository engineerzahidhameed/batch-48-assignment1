"use strict";
/*21.	They think of something you could store in a TypeScript Object. Write a program that creates
Objects containing these items.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Object already created in question 20 previously with two elements in arrays.
//Now changing it to 4 elements in a array 'arrayList' object after getting user input.
var promptSync = require("prompt-sync");
var prompt = promptSync();
var arrayList = {
    Mountains: [],
    Rivers: [],
    Countries: [],
    Cities: [],
};
console.log('\n*****Enter the input (Mountains, Rivers, Countries, Cities) 4 times :\n\n');
// using for loop to input the object properties
for (var i = 0; i <= 3; i++) {
    var mounT = prompt('Enter name of Mountain: ');
    arrayList.Mountains[i] = mounT;
    console.log();
    var riveRs = prompt('Enter name of River: ');
    arrayList.Rivers[i] = riveRs;
    console.log();
    var ciTy = prompt('Enter name of city: ');
    arrayList.Cities[i] = ciTy;
    console.log();
    var counTry = prompt('Enter name of Country: ');
    arrayList.Countries[i] = counTry;
    console.log();
}
console.log('Object arrayList created =', arrayList);
