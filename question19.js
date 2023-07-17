/*19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
  indicating the number of people you are inviting to dinner.*/
var guestList = {
    deCeased: ['Hameed', 'Hafeez'],
    liVing: ['Ahmad', 'Maryam'],
};
console.log(guestList.deCeased[0], 'and', guestList.deCeased[1], 'are dead');
console.log(guestList.liVing[0], 'and', guestList.liVing[1], 'are invited for dinner');
// Message to indicate the number of people invited on dinner
for (var i = 0; i <= guestList.liVing.length - 1; i++) {
    console.log();
    console.log('Assalam-o-Alaikum!, Dear', guestList.liVing[i], 'I am inviting two friends on dinner.');
}
console.log();
