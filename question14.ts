/*14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
  Make a list that includes at least three people you’d like to invite to dinner. Then use your list to
  print a message to each person, inviting them to dinner.*/ 

// Creating an object with a list of deceased and living persons
let guest_List = {
    deCeased: ['Hameed', 'Hafeez'],
    liVing: ['Ahmad', 'Maryam'],
};
//console.log();
console.log('\n'+guest_List.deCeased[0], 'and', guest_List.deCeased[1], 'are dead.\n');

console.log(guest_List.liVing[0], 'and', guest_List.liVing[1],'are invited for dinner.\n');
//console.log();