// since ES2015 it's better to use let and const instead of var
for (let num=0; num < 11 ; num++)
{
    console.log("current number is "+ num)
}

// for (let key in object) {
// }
const person = {name:"Rose", age:14, weight:65.5, height: 165, eyeColor: "blue"}
for(let key in person){
    console.log("key is " + key + " and value is "+person[key])
}
/*
Do not use for in over an Array if the index order is important.
The index order is implementation-dependent, and array values may not be accessed in the order you expect.
It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
 */

// for (let var in array){
//}
numbers = [12,65,7,9,3,2,5,]
for (let num in numbers){
    console.log("index is "+ num + " and value is "+numbers[num])
}
for (let idx = 0; idx < numbers.length ; idx++)
{
    console.log("index is "+ idx + " and value is "+numbers[idx])
}
/*
for (variable of iterable) {
  // code block to be executed
}
 */
console.log("values of numbers are: ")
for (let value of numbers){
    console.log(value)
}
numbers.forEach(func)
function func(value,index, array){
    // we can define less parameters
    console.log(array +" array value of index "+index+" is "+ value)
}
