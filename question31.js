/*31.	No Users: Add an if test to Exercise "30" to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
// List of users
var uSers = ['ayesha_user', 'maryam_user', 'zahid_user', 'ahmad_user', 'zia_user', 'admin'];
if (uSers.length == 0) { // Empty array has always length equal to zero
    console.log('We need to find some users.\n');
}
else { // Checking length to find number of users in list
    console.log('\n Hello admin!, We have', uSers.length, 'users.\n');
    uSers.splice(0);
    console.log(uSers);
}
if (uSers.length == 0) {
    console.log('\n We need to find some users.\n');
}
