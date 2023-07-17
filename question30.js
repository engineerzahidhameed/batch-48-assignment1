/*30.	Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
 writing code that will print a greeting to each user after they log in to a website. Loop through the
 array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a
 status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
// List of users
var uSers = ['ayesha_user', 'maryam_user', 'zahid_user', 'ahmad_user', 'zia_user', 'admin'];
// To check the users name in the list one by one
for (var _i = 0, uSers_1 = uSers; _i < uSers_1.length; _i++) { // Checking user is admin or not?
    var names = uSers_1[_i];
    if (names == 'admin') {
        console.log('Hello admin!, Would you like to see a status report?\n');
    }
    else { // Welcoming other users on logging in
        console.log('Hello', names + ', thank you for logging in again.\n');
    }
}
