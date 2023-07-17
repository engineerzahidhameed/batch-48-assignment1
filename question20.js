"use strict";
/* 20.	Think of something you could store in a array. For example, you could make a list of mountains,
  rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list
  containing these items.*/
Object.defineProperty(exports, "__esModule", { value: true });
// importing prompt-sync to get input to store the list from user using 'prompt'
var promptSync = require("prompt-sync");
var prompt = promptSync();
// Creating an object with array properties
var arrayList = {
    Mountains: [],
    Rivers: [],
    Countries: [],
    Cities: [],
};
for (var i = 0; i <= 1; i++) {
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
console.log(arrayList);
