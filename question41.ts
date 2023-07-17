/*41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/

//Creating a list of magicians
let Magicians : any = ['jack', 'david', 'sam', 'jim', 'rex'];

//Defining a function
function show_Magicians (name) {
    
    for (name of Magicians) {           // Using 'for' loop to print the name one after other
        console.log();
        console.log(name);
    
    }
        
console.log();
    
}

show_Magicians(Magicians);