//if declaration and initialization are on the same line, typescript will figure out the type of color for us
let apples = 72;
// apples = "87"; //ts error

// else typescript will not figure out the type and assign type of Any
let variable1;
variable1 = 978
variable1 = "Allen"

let speed = "fast";
// speed = 76 //ts error

let hasName = true;
let notingMuch = null ;
let nothing = undefined;

// built in objects
let now = new Date();

// array
let colors = ["red", "green", "blue", "black", "white"];
let myNumbers = [1,3,5,6,12];
let truths = [true, true, false];

// Classes
class Car{

}
let car: Car = new Car() ;

// Object Literal
let point = {
    x:10,
    // x:'owe', //ts error
    y: 20,
    // a: 30 //ts error
};

// Function
const logNumber= (i: number) => {
    console.log(i)
}
