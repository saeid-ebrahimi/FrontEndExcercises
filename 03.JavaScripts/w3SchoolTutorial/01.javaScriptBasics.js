/*
JavaScript is a loosely typed and dynamic language.
 Variables in JavaScript are not directly associated
  with any particular value type, and any variable can
   be assigned (and re-assigned) values of all types:

 The set of types in the JavaScript language consists of primitive values and objects.

Primitive values (immutable datum represented directly at the lowest level of the language)
    Boolean type
    Null type
    Undefined type
    Number type
    BigInt type
    String type
    Symbol type
Objects (collections of properties)
array
 */

alert("hello world")

// to write comments

// Basic Data types
// there is no difference between integer and float in JS
// Number
12
12.65
-65.8
6.5e+12
1.3e-7
// BigInt
//124524n
// string
"hello world"
'hello world'
// boolean
true
false
// undefined
undefined
// null
null
// arrays
[12,78, "gholi", 154.9]
// objects key value pairs, key can be string or symbol
var person = {name:"mercedes", age:17 , eyecolor:"blue"}
// to clear console
clear()

// basic numeric operations

3 + 4
4 - 5
2 * 9
3 / 5  // result can be float and JS dont have floor division
13 % 5
12 ** 3

// assignment
x = 14
// self assignments
x++
x--
x += 4
x -= 2
x *= 7
x /= 2
x %= 3
x **= 2

// bitwise operators
/*
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
 */
13 & 10
13 | 10
13 ^ 10
~10
x >> 3 //  sign preserved right shift
x >>> 3 // zero filled right shift
x << 2 // zero filled left shift

// string operators
"django is cool"

"django" + 'is super cool'
"django".length
'hello \n start a new line'

"hello \n start a new line"

"hello \"qoutes\" "

8 + 7 + "hello"  // "20hello"
"hello"+6+11    // "hello611"
var s = "django"
s += "is awesome"
// empty string
var ans = ""
// index
"look at the dog"[10]
'look at the dog'[4]

// variables
// var varName = value;  // now-days JS is flexible to semicolon
var bankAccount = 100;  // JS use camelcase
var deposit = 50;
var total = bankAccount - deposit;
var greeting = "Welcome back";
var name = "Jose";
alert(greeting+ name);

var myVariable; //undefined
var bonous = null; // defined to null
alert("to pop a message")
console.log("to write in the console!")
// to get a string from user
var age = prompt("enter something here:")


// use typeof to see types
typeof "hello"
typeof ""
typeof 13.98
//typeof 12n
// use instanceof
"hi" instanceof String
153 instanceof Number
//132n instanceof BigInt
[12, 44, 6] instanceof Array

// use comma
var x = 17
x = (x**2 ,x+10)  // x = 17^2 + 10

// test nullish : nullish is null or undefined

var baz ; // baz is undefined
baz = 0 ?? 42; // results : baz = 42
// nullish assignment
x ??= 17

