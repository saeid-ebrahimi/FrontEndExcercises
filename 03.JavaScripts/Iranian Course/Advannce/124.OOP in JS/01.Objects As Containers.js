const phone = {
    brand: "Samsung",
    model: "A74"
}
console.log(phone)
delete phone.model
phone["display type"] = "Super AmoLED"
console.log(phone)

// primitive Types: undefined, null , number, string, boolean
let name = new String("Susan") // better to use literal way
let number = 2312
console.log(number instanceof Object)
console.log(name instanceof Object)
// reference Types: object , array

// functions are objects
function sayHello() { return "Hello, I'm a function"}

console.log(typeof sayHello)
console.log(sayHello instanceof Function)
console.log(sayHello instanceof Object)

function f(){ return "Hello"}
f.metaFunction = function (){ return "I'm a function on a function"}
console.log(f())
console.log(f.metaFunction())