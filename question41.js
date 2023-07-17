/*41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
//Creating a list of magicians
var Magicians = ['jack', 'david', 'sam', 'jim', 'rex'];
//Defining a function
function show_Magicians(name) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) { // Using 'for' loop to print the name one after other
        name = Magicians_1[_i];
        console.log();
        console.log(name);
    }
    console.log();
}
show_Magicians(Magicians);
