/* 35.	Animals: Think of at least three different animals that have a common characteristic. Store the 
 names of these animals in a list, and then use a for loop to print out the name of each animal. 
 • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
 • Add a line at the end of your program stating what these animals have in common. You could print a 
  sentence such as Any of these animals would make a great pet!*/
//List of animals
let animals = ['dog', 'cat', 'lamb'];

//Printing list of animals
for (var animal of animals){
    console.log('\n'+animal+'\n');
    console.log();
}

// Printing a line for each animal
for (var animal of animals){
    
    console.log('\n'+animal, 'would make a nice and friendly pet.\n');
    console.log();
    
}

console.log('Any of these animals,', animals[0]+',', animals[1]+',', animals[2]+', would make a good pet.\n');
