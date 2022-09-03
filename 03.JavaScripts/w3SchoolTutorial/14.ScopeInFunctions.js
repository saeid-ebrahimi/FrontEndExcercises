/*
Function scope
Variables defined inside a function cannot be accessed
 from anywhere outside the function, because the variable
  is defined only in the scope of the function. However,
   a function can access all variables and functions defined inside
    the scope in which it is defined.

In other words, a function defined in the global scope can access
 all variables defined in the global scope. A function defined
  inside another function can also access all variables defined
   in its parent function, and any other variables to which the
    parent function has access
 */
// var v = "Global V"
let v = "Global V"
let stuff = "Global Stuff"
function fun(stuff){
    console.log(v)
    stuff = "Reassign stuff inside func"
    console.log(stuff)
}
fun()
console.log(stuff)