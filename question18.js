/*18.	Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
  changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that
  its order has changed.*/
/* ----------------List of Places to Visit------------------------
'Makkah', 'Tabuk', 'Ankara', 'Beijing', 'Palestine', 'Medina'.*/
var myArray = ['Makkah', 'Tabuk', 'Ankara', 'Beijing', 'Palestine', 'Medina'];
//Original array printed
console.log('\n\t\t Names of cities stored in the array.\n', myArray);
console.log();
// Array in aplphabetical order without modifying actual list
var sorTed = myArray.slice().sort();
//let sorTed  = Array.from(myArray).sort();
console.log('\n\t\t Names of cities stored in sorted array.\n', sorTed);
console.log();
// Original array is still intact.
console.log('\n\t\t Names of cities stored in original array.\n', myArray);
console.log();
//Printing in reverse aplphabetical order without changing original list
var reVersed = myArray.slice().sort().reverse();
console.log('\n\t\t Names of cities in reversed alphabetical order.\n', reVersed);
console.log();
// Original array is still intact.
console.log('\n\t\t Names of cities stored in original array.\n', myArray);
console.log();
// Reverse the order of original list
var reversed = myArray.reverse();
console.log('\n\t\t Names of cities with reversed order.\n', reversed);
console.log();
// Reversing the reversed list of original list to show that its back in original position
var re_reversed = reversed.reverse();
console.log('\n\t\t Names of cities stored in original order\n', re_reversed);
console.log();
// Sorting the myArray list in alphabetical order
var re_sorTed = myArray.sort();
console.log('\n\t\t Names of cities sorted in alphabetical order\n', re_sorTed);
console.log();
//Reversing the sorted list in alphabetical order
var reverse_sort = re_sorTed.reverse();
console.log('\n\t\t Names of cities sorted in reverse alphabetical order.\n', reverse_sort);
console.log();
//const rereVersed = [...myArray].sort().reverse();
//console.log('\n\t\t Names of cities stored in reverse alphabetical order array\n', rereVersed);
//console.log();
//console.log('\n\t\t Names of cities re-stored in original order\n', myArray);
//onsole.log();
