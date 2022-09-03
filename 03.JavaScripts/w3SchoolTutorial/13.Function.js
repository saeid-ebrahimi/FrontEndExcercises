/*
Parameters are essentially passed to functions by value
Functions must be in scope when they are called, but the function
declaration can be hoisted (appear below the call in the code)
function hoisting only works with function
 declarations—not with function expressions.
 */
hello()
function hello()//: undefined
{
    console.log("hello")
}
function helloSome(name="Sam") //:undefined
{
    console.log("hello "+ name)
}
function formalGreeting(name = "Sam", title = "Sir") //:undefined
{
    console.log("Welcome " + title + " " + name )
}

function formal(name="James", title="Sir")
{
    return title + " " + name
}

helloSome("Mike")
formalGreeting("Alex", "Doctor")
console.log(formal("Gary"))