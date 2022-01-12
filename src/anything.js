
// Callback
//Where callbacks really shine are in asynchronous functions, 
//where one function has to wait for another function (like waiting for a file to load).
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);



//Curried function
//It will take the first argument and return a function that will take the next argument [...]
const add = x => y => x + y

console.log(add(2)(3))
//Outputs 5.
//add(2) calls the function and it returns a second function that will take the second argument,
//since the second argument (3) is already in front of it, it immediately resolves the sum.


//Hoisting is JavaScript's
//default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

x = 5; // Assign 5 to x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element
var x; // Declare x


//Using a let variable before it is declared will result in a ReferenceError.This will result in a ReferenceError:
carName = "Volvo";
let carName;

//Using a const variable before it is declared, is a syntax errror, so the code will simply not run,This code will not run
carName = "Volvo";
const carName



//JavaScript Initializations are Not Hoisted
//y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.
var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

y = 7;    // Assign 7 to y