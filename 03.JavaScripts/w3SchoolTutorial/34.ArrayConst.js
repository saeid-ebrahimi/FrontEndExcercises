// An array declared with const cannot be reassigned:
// JavaScript const variables must be assigned a
// value when they are declared:
const cars = ["Saab", "Volvo", "BMW"]
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR
// It does NOT define a constant array.
// It defines a constant reference to an array.
cars[3] = "Mercedes"
cars[0] = "Lamborghini"
document.getElementById("demo").innerHTML += cars + "<br>"
// Redeclaring an array declared with var
// is allowed anywhere in a program:

var cars2 = ["Volvo", "BMW"]
var cars2 = ["Toyota", "BMW"]
cars2 = ["Volvo", "Saab"]
// Re declaring an array with const,
// in another scope, or in another block, is allowed:
const fruits = ["apple", "banana", "mango", "kiwi"]
document.getElementById("demo").innerHTML += fruits + "<br>"
{
    const fruits = ["orange", "date"]
    document.getElementById("demo").innerHTML += fruits + "<br>"
}
