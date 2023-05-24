
// Immutability && Mutability

// Primitive Data Types are immutable : Number, Boolean, String, Null, Undefined, Symbols
// Reference Data Types are mutable:  Objects, Functions, Collections, Arrays, Dates, and Other types of objects

let numberOne = 20
let numberTwo = 10
numberOne = numberTwo
numberTwo = 19
console.log(numberOne)
console.log(numberTwo)

let loginFlag = false
loginFlag = true


console.log(loginFlag)

let user1 = {
    id: 2,
    username: "Amir",
    age: 23
}

let user2 = user1
user2.username = "Ahmad"
console.log(user1)

let names = ["ali", "amin", "amir", "sasan"]

let filteredNames = names.filter( name => name.length > 3)
console.log(filteredNames)