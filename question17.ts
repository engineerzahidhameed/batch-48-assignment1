/*17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
  dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
  invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop
  a name from your list, print a message to that person letting them know you’re sorry you can’t invite
  them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
  actually have an empty list at the end of your program.*/


let guestList = {
    deCeased: ['Hameed', 'Hafeez'],
    liVing: ['Ahmad', 'Maryam'],
};

console.log(guestList.deCeased[0], 'and', guestList.deCeased[1], 'are dead.');
console.log();
console.log(guestList.liVing[0], 'and', guestList.liVing[1],'are invited for dinner.');
console.log();
console.log(guestList.liVing[0],'has informed that he is not coming on dinner.');
console.log();

guestList.liVing.splice(0,1,'Ayub');  // Ayub is included as new guest replacing Ahmad
let new_List = guestList; 
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


let big_list = new_List.liVing.push('Ali'); // Adding name of "Ali" at the end of list
console.log(new_List.liVing);
console.log();

var s:number = (new_List.liVing).length/2; //Finding length of list and dividing by 2

new_List.liVing.splice(s, 0,'Ayesha'); // Adding name of guest Ayesha in middle of even number elements 
console.log(new_List.liVing);
console.log();

console.log('\n'+new_List.liVing[0], 'is cordially invited for dinner tonight.\n');

console.log('\n'+new_List.liVing[1], 'is cordially invited for dinner tonight.\n');

console.log('\n'+new_List.liVing[2], 'is cordially invited for dinner tonight.\n');

console.log('\n'+new_List.liVing[3], 'is cordially invited for dinner tonight.\n');

console.log('\n'+new_List.liVing[4], 'is cordially invited for dinner tonight.\n');


// I have only space for two guests for dinner
console.log('--------------Sorry! I can invite just two guests on dinner tonight.\n');


console.log(new_List.liVing);
console.log();
console.log(new_List.liVing.shift(), 'Sorry! can\'t invite on dinner.');//Removing 1st element of array
console.log();


for (var i = new_List.liVing.length-1; i=((new_List.liVing.length)/2)-1; i--){
   
    console.log(new_List.liVing);
    console.log();    
    console.log(new_List.liVing.pop(), 'Sorry! can\'t invite on dinner.');
    // Removing last person from list
    
     console.log();
    }

    console.log(new_List.liVing);

for (var x = 0; x<=new_List.liVing.length-1; x++){
    console.log(); 
    console.log(new_List.liVing[x], 'You are cordially invited on dinner.');
        
    }
    console.log();
    console.log(new_List.liVing);

for (var y = 0; y<=new_List.liVing.length; y++){
   
        console.log();  
        new_List.liVing.shift(); // Removing names to create empty array
        console.log(new_List.liVing, '\t***Removing elements to create empty array.***');
        console.log();

    }
