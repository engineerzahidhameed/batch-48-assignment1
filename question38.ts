/*38.	Cities: Write a function called describe_city() that accepts the name of a city and its country.
 The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the
 country a default value. Call your function for three different cities, at least one of which is not in
 the default country.*/

 // Defining a function
function describe_city(city, country='Pakistan') {

    console.log('\n\"'+city.toUpperCase()+'\" city is located in \"'+country.toUpperCase()+'.\"\n');
}

describe_city('Lahore');    // Function with default value of  country 
describe_city('Islamabad'); // With default value of country
describe_city('Beijing', 'China'); // Different city and different country