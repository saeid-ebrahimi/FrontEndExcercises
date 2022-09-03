
const fruits = ["Banana", "Orange", "Apple", "Mango", "Coconut"]
document.getElementById("demo").innerHTML += fruits.toString() + "<br>"
document.getElementById("demo").innerHTML += fruits.join(" && ") + "<br>"
let last = fruits.pop()
fruits.push("Pineapple")
let first = fruits.shift()
fruits.unshift(first)

// Array elements can be deleted using the JavaScript operator delete.
//
// Using delete leaves undefined holes in the array.
//
// Use pop() or shift() instead.

// delete fruits[2]
const nuts = ["Almond"]
const tropical = ["Kiwi", "Pineapple", "dragon fruit"]
const all = fruits.concat(nuts, tropical)
document.getElementById("demo").innerHTML += all.concat("strawberry") + "<br>"//fruits
fruits.splice(3,2, "Kiwi","Strawberry", "BlueBerry","StrawBerry")

document.getElementById("demo").innerHTML += fruits + '<br>'
// The splice() method can be used to add new items to an array:
// With clever parameter setting, you can use splice() to remove
// elements without leaving "holes" in the array:
all.splice(1,3)
document.getElementById("demo").innerHTML += all + "<br>"
document.getElementById("demo").innerHTML += fruits.slice(2,5) + "<br>"
// All JavaScript objects have a toString() method.
document.getElementById("demo").innerHTML += fruits.slice(2).toString() + "<br>"