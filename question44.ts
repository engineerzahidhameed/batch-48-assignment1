/*44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The 
function should have one parameter that collects as many items as the function call provides, and it 
should print a summary of the sandwich that is being ordered. Call the function three times, using a
different number of arguments each time.*/

// Creating a three list of items in a array as input parameter for function
let Items :string[] = ['French Cheese', 'Green Chillies', 'Olives', 'Salad leaf'];


let Item2 :string[] = ['Onion', 'Red Chillies', 'China Sauce'];


let Item3 :string[] = ['Mayo', 'Tomato Sauce', 'Cabbage', 'Jellapino'];

//Writing a function Sandwich
function Sandwich (Items:string []) {
    
    console.log('Hello! I would like to have a special sandwiches with these items:');
   
    for (let item of Items) {
        console.log(' Add some '+item); // Telling the list of items to be added in Sandwich
    }
   
    console.log('\t\t\t 5 \n \t\t\t 4 \n \t\t\t 3 \n \t\t\t 2 \n \t\t\t 1\n Dear! your sandwiches are ready.\n');
}
console.log();
Sandwich(Items);

console.log();
Sandwich(Item2);

console.log();
Sandwich(Item3);
console.log();