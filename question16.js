/*16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three
 more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
 people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
 list. • Print a new set of invitation messages, one for each person in your list.*/
var guestList = {
    deCeased: ['Hameed', 'Hafeez'],
    liVing: ['Ahmad', 'Maryam'],
};
console.log(guestList.deCeased[0], 'and', guestList.deCeased[1], 'are dead.');
console.log();
console.log(guestList.liVing[0], 'and', guestList.liVing[1], 'are invited for dinner.');
console.log();
console.log(guestList.liVing[0], 'has informed that he is not coming on dinner.');
console.log();
guestList.liVing.splice(0, 1, 'Ayub'); // Ayub is included as new guest replacing Ahmad
var new_List = guestList;
console.log(new_List.liVing[0], 'is going to be our new guest for dinner replacing Ahmad.');
console.log();
console.log(new_List.liVing[0], 'is cordially invited for dinner tonight.');
console.log();
console.log(new_List.liVing[1], 'is cordially invited for dinner tonight.');
console.log();
console.log('Attention all invitees! please, I have found a bigger table for dinner.');
console.log();
var s1 = new_List.liVing.unshift('Zahid'); // Adding name at the first place of array
console.log(new_List.liVing);
console.log();
var big_list = new_List.liVing.push('Ali'); // Adding name of "Ali" at the end of list
console.log(new_List.liVing);
console.log();
var s = (new_List.liVing).length / 2; //Finding length of list and dividing by 2
new_List.liVing.splice(s, 0, 'Ayesha'); // Adding name of guest Ayesha in middle of even number elements 
console.log(new_List.liVing);
console.log('\n' + new_List.liVing[0], 'is cordially invited for dinner tonight.\n');
console.log('\n' + new_List.liVing[1], 'is cordially invited for dinner tonight.\n');
console.log('\n' + new_List.liVing[2], 'is cordially invited for dinner tonight.\n');
console.log('\n' + new_List.liVing[3], 'is cordially invited for dinner tonight.\n');
console.log('\n' + new_List.liVing[4], 'is cordially invited for dinner tonight.\n');
