const numbers = [13, 64, 17, 34, 19, 80, 64]
let txt = ""
numbers.forEach(myFunc)
console.log(txt)
document.getElementById("demo").innerHTML = txt
function myFunc(value){
    txt += value + "<br>"
}

let mapped = numbers.map(function (value){ return value* value})
document.getElementById("demo").innerHTML += mapped + "<br>"

let filtered = numbers.filter(function (value){ return value %3 ===1 })
document.getElementById("demo").innerHTML += filtered + "<br>"

let reduced = numbers.reduce(func1)
document.getElementById("demo").innerHTML += reduced + "<br>"
let reducedRight = numbers.reduceRight(func1)
document.getElementById("demo").innerHTML += reducedRight + "<br>"
function func1(total, value){
    return total - value
}

let checkAll = numbers.every(function (value){ return value < 80})
document.getElementById("demo").innerHTML += checkAll + "<br>"
let checkSome = numbers.some(function (value) { return value > 40})
document.getElementById("demo").innerHTML += checkSome + "<br>"

// array.indexOf(item, start)
// Array.indexOf() returns -1 if the item is not found.
// If the item is present more than once, it returns the position of the first occurrence.
let idx = numbers.indexOf(1, 25)
let lIdx = numbers.lastIndexOf(1,64)
document.getElementById("demo").innerHTML += idx + "<br>"
document.getElementById("demo").innerHTML += lIdx + "<br>"
let val1 = numbers.find(function (value) { return value % 2 === 0})
let val2 = numbers.findIndex(function (value) { return value % 2 === 0})
document.getElementById("demo").innerHTML += val1 + "<br>"
document.getElementById("demo").innerHTML += val2 + "<br>"
// The Array.from() method returns an Array object from
// any object with a length property or any iterable object.
const arr2 = Array.from("helloMyFriends")
document.getElementById("demo").innerHTML += arr2 + "<br>"

// The array.keys() method returns an Array Iterator object
// with the keys of an array.
let keys_iter = numbers.keys()

let content = ""
for ( let k of keys_iter){
    content += k + "element is " + numbers[k]+ "<br>"
}
document.getElementById("demo").innerHTML += content

// Create an Array Iterator, and then iterate over the key/value pairs:
let entries = numbers.entries()
let content2 = ""
for (let item of entries)
    content2 += item + "<br>"
document.getElementById("demo").innerHTML += content2
document.getElementById("demo").innerHTML += numbers.includes(17) + "<br>"
