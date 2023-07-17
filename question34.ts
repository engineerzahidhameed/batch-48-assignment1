/*34.	Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
  and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name
  of the pizza. For each pizza you should have one line of output containing a simple statement like I 
  like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The
  output should consist of three or more lines about the kinds of pizza you like and then an additional 
  sentence, such as I really love pizza!
*/
// List of Pizzas
let pizzas = ['fajita', 'cheese', 'chicken tikka'];

// For loop to print out pizza name and line in second for loop
for (var pizza of pizzas) {
    console.log();
    console.log('\n'+pizza+'\n');
    
}
for (var pizza of pizzas) {
    console.log();
    console.log('I like '+pizza,'pizza.\n');
    
}

console.log('\nI like to go out for pizza hunt at least once a month wiht my family. We all really love to eat and fun at pizza point.\n')