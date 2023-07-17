/*13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and
 make a list that stores several examples. Use your list to print a series of statements about these
 items, such as “I would like to own a Honda motorcycle.”*/
var myCars = ['Honda', 'Toyota', 'Suzuki', 'BMW', 'Porche', 'Mercedes'];
for (var i = myCars.length - 1; i >= 0; i--) {
    if (i >= 3)
        // Press alt+z to wrap up text in the window
        console.log('\nI would love to buy', myCars[i], 'but my pocket only allows me to opt for', myCars[i - 3] + '.\n');
}
//console.log('I would love to buy',myCars[5],'but my pocket only allows me to opt for',myCars[2]);
