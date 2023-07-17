/*39.	City Names: Write a function called city_country() that takes in the name of a city and its 
country. The function should return a string formatted like this:
"Lahore, Pakistan"
*/

// Writing a function with city and country as its parameters

function city_country(city, country) {          
    let City = '\"'+city+', '  +country+'\"';
    return City;
    
}
let Returned = city_country('Lahore', 'Pakistan'); // Return value of City stored in a variable Retured
console.log(Returned);

