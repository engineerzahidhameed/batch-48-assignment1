/*45.	Cars: Write a function that stores information about a car in a Object. The function should 
always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
arguments. Call the function with the required information and two other name-value pairs, such as a 
color or an optional feature. Print the Object that’s returned to make sure all the information was 
stored correctly.*/

// Defining a function of MyCars to create object storing data of cars
function MyCars(Manufacturer :string, model :string, ...arb_argument :string[]){
    let car = { 
        Manufacturer: Manufacturer,
        model: model 
    };

    // Using for loop to add key and value for additional number of arguments entered in string
    for (let a = 0; a <= arb_argument.length-1; a+=2){
        car[arb_argument[a]] = arb_argument[a+1];
    }
    return car;
    }
    const mycars = MyCars('Toyota', 'Corolla', 'color', 'red', 'Transmission', 'Auto', 'Engine', '1200 cc');
    console.log(mycars);
    