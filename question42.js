/*42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
//List of magicians
var Magicians = ['jack', 'david', 'sam', 'jim', 'rex'];
// Fuction named show_Magicians
function show_Magicians(name) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        name = Magicians_1[_i];
        console.log(name);
    }
}
show_Magicians(Magicians);
// Function make_great
function make_great(names) {
    for (var i = 0; i <= Magicians.length - 1; i++) {
        Magicians[i] = 'Great ' + Magicians[i];
    }
    console.log('*****\t Modified Array with \"Great\" added in it. \t*****\n');
    show_Magicians(Magicians);
    console.log();
    console.log(Magicians);
}
make_great(Magicians);
