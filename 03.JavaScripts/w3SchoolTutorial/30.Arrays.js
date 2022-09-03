// define array
const cars = ["Mercedes", "Volvo", "BMW", "GTx"]
// assign new items
// WARNING !
// Adding elements with high indexes can create undefined "holes" in an array:
cars[4] = "Lamborghini"
cars[5] = "Ferrari"
// assign new value
cars[0] = "Opel"
// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.
const pets = new Array("cat","dog","bunny",)

// Arrays are a special type of objects
let car = cars[0]
let l = car.length
let last = cars[cars.length -1]
const fruits = ["Banana", "Orange", "Apple", "Mango", "Berry", "Straw Berry"]
let text = "<ul><li>"
for (let fruitElement of fruits) {
    text +=`<li> ${fruitElement} </li>`
}
text += "</ul>"
document.getElementById("demo").innerHTML = text

let text2 = "<ul>"
cars.forEach(addItems)
text2 += "</ul>"
function addItems(item){
    text2 += `<li> ${item} </li>`
}

let last = fruits.pop()
fruits.push("Lemon")

//Arrays with named indexes are called associative arrays (or hashes).
//
// JavaScript does not support arrays with named indexes.
// If you use named indexes, JavaScript will redefine the array to an object.

// typeof and instanceof operator
console.log(typeof fruits) // return object
console.log(fruits instanceof Array)

// isArray method
console.log(Array.isArray(fruits))