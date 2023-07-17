/*6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
 and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print
 the name once, so the whitespace around the name is displayed. Then print the name after striping the 
 white spaces.*/


let my_Name = '\n          Hello !, Zahid Hameed.         \n';
console.log();
console.log(my_Name.trim()); // Trimming spaces at the beginning and end
console.log();
console.log(my_Name.replace(/\s/g, "")); // removing whitespaces within the text string
console.log();

