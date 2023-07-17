/*3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
//---------------------Name Cases---------------------------
var myName = "Zahid hameed";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
// Converting to Title case using simple method without array or loop method
var s1 = myName.charAt(0).toUpperCase();
//console.log(s1);
var s2 = myName.charAt(6).toUpperCase();
//console.log(s2);
// Using concatenation of strings and finding length of the name including white space
console.log(s1 + myName.substring(1, 5) + " " + s2 + myName.substring(7, myName.length));
// Writing a function for Title Case
function titleCase(strInput) {
    strInput = strInput.toLowerCase();
    strInput = strInput.split(' ');
    var i = 0;
    for (i = 0; i < strInput.length; i++) {
        strInput[i] = strInput[i].charAt(0).toUpperCase() + strInput[i].slice(1);
    }
    return strInput.join(' ');
}
;
console.log(titleCase(myName));
