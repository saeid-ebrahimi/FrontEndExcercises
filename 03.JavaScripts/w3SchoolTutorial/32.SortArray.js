// sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"]
document.getElementById("demo").innerHTML += fruits + "<br>"
fruits.sort()
document.getElementById("demo").innerHTML += fruits + "<br>"
fruits.reverse()
document.getElementById("demo").innerHTML += fruits + "<br>"
const numbers = [ 12, 15 , 1723, 122]
numbers.sort()
document.getElementById("demo").innerHTML += numbers + "<br>"
// sort numbers by value
numbers.sort(function ( a, b){return a < b})
document.getElementById("demo").innerHTML += numbers + "<br>"
numbers.sort(function ( a, b){return a > b})
document.getElementById("demo").innerHTML += numbers + "<br>"
// to shuffle array
numbers.sort(function(){ return 0.5 - Math.random()})
document.getElementById("demo").innerHTML += numbers + "<br>"
// better way to shuffle
for ( let idx1 = numbers.length -1 ; idx1 > 0 ; idx1--)
{
    let idx2 = Math.floor(Math.random() * idx1)
    let temp = numbers[idx1]
    numbers[idx1] = numbers[idx2]
    numbers[idx2] = temp

}
document.getElementById("demo").innerHTML += numbers + "<br>"
function maximum(arr){
    return Math.max.apply(null, arr)
}
function minimum(arr){
    return Math.min.apply(null, arr)
}
document.getElementById("demo").innerHTML += maximum( numbers) + "<br>"
document.getElementById("demo").innerHTML += minimum( numbers) + "<br>"
// sort array of objects
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
]
console.log(cars)
cars.sort(function (a, b){ return a.year - b.year})
document.getElementById("demo").innerHTML += cars + "<br>"
console.log(cars)

cars.sort (function (a , b) {return a.type > b.type})
document.getElementById("demo").innerHTML += cars + "<br>"
console.log(cars)