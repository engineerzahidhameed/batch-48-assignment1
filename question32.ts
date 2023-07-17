/*32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that
  everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
  also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a
  message that the person will need to enter a new username. If a username has not been used, print a 
  message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
// Two lists of users

let current_users = ['Asif', 'Ali', 'AHAD', 'Awan', 'babar'];
let new_users = ['ALI', 'Jawad', 'Zia', 'Usman', 'Ahad'];

// First for loop of new_users list
for (var i = 0; i <= (new_users.length-1); i++) {

// Second for loop of current_users
    for (var h = 0; h <= (current_users.length-1); h++) {

//  Comparing the users in both lists.
        if (new_users[i].toLowerCase() == current_users[h].toLowerCase()) {
            
            // Displaying names which are same and case case insensitive
            console.log();
            console.log(new_users[i], current_users[h]);
            console.log();
            
            // asking for to entering new message
            console.log('Plz enter new username.\n');
        
        }
        else {

            //If the new username is not in the current list
            console.log('Username is available.\n');
    }
     
       
    }
    
}