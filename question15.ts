/*15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
 send out a new set of invitations. You’ll have to think of someone else to invite.
 • Start with your program from Exercise 14. Add a print statement at the end of your program stating the
 name of the guest who can’t make it.
 • Modify your list, replacing the name of the guest who can’t make it with the name of the new person
  you are inviting.
 • Print a second set of invitation messages, one for each person who is still in your list.*/

//let guest_List = ['Hameed', 'Hafeez', 'Ahmad', 'Maryam'];

let guestList = {
    deCeased: ['Hameed', 'Hafeez'],
    liVing: ['Ahmad', 'Maryam'],
};


console.log('\n'+guestList.deCeased[0], 'and', guestList.deCeased[1], 'are dead.\n');
//console.log();
console.log(guestList.liVing[0], 'and', guestList.liVing[1],'are invited for dinner.\n');
//console.log();
console.log(guestList.liVing[0],'has informed that he is not coming on dinner.\n');
//console.log();

let neWList: string[] = [];
neWList = guestList.liVing; 
neWList[0]='Ayub';  // Ayub is included as new guest

console.log(neWList);

// press alt+z to wrap up text
console.log('\n'+neWList[0], 'is going to be our new guest for dinner replacing',guestList.liVing[0],'.\n');


console.log(neWList[0], 'is cordially invited for dinner tonight.\n');

console.log(neWList[1], 'is cordially invited for dinner tonight.\n');


