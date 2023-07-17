/*43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with 
a copy of the array of magicians’ names. Because the original array will be unchanged, return the new 
array and store it in a separate array. Call show_magicians() with each array to show that you have one 
array of the original names and one array with the Great added to each magician’s name.*/

// list of magicians
let Magicians = ['jack', 'david', 'sam', 'jim', 'rex'];

    function show_Magicians (Original_array :string[]) {
        let Magicians = [];
        for (var i = 0; i<= Original_array.length-1; i++) {
            Magicians[i] = Original_array[i];
        }
      console.log(Magicians);
        
    }
    
    
function make_great(new_Array :string[]){
    let Great_magicians = [];
    for (var i=0; i < new_Array.length; i++) {
        
        Great_magicians[i] = 'Great ' + new_Array[i];
            
    }
    return Great_magicians;

}
let p1 = make_great(Magicians);
console.log();
show_Magicians(Magicians);
console.log();
console.log('*****\t Modified Array with \"Great\" added in it. \t*****\n');
show_Magicians(p1);





