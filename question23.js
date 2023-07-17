"use strict";
/*23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test
 and your prediction for the results of each test. Your code should look something like this:
 let car = 'subaru';
 console.log("Is car == 'subaru'? I predict True.")
 console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var car_names = {
    a: 'suzuki',
    b: 'honda',
    c: 'toyota',
    d: 'kia',
    e: 'alsvin'
};
console.log('suzuki, toyota, honda, kia, alsvin\n');
var caRs = prompt('Enter name of Car (Out of options above): ');
if (caRs == car_names.a) {
    console.log(car_names.a);
    console.log('\tIs car == \"suzuki\"?\n\tI predict\"True\"and car is', car_names.a, '.');
    console.log();
}
if (caRs == car_names.b) {
    console.log();
    console.log('\tIs car == \"honda\"?\n\tI predict\"True\"and car is', car_names.b, '.');
    console.log();
}
if (caRs == car_names.c) {
    console.log();
    console.log('\tIs car == \"toyota\"?\n\tI predict\"True\"and car is', car_names.c, '.');
    console.log();
}
if (caRs == car_names.d) {
    console.log();
    console.log('\tIs car == \"kia\"?\n\tI predict\"True\"and car is', car_names.d, '.');
    console.log();
}
if (caRs == car_names.e) {
    console.log();
    console.log('\tIs car == \"alsvin\"?\n\tI predict\"True\"and car is', car_names.e, '.');
    console.log();
}
if (caRs != car_names.a && car_names.b && car_names.c && car_names.d && car_names.e) {
    console.log();
    console.log('\n\tI predict\"False\"and car is', caRs, '.');
    console.log();
}
