
//JavaScript provides 8 mathematical constants that can be
// accessed as Math properties:
let pi = Math.PI
let e = Math.E
let ln2 = Math.LN2
let ln10 = Math.LN10
let lg2e = Math.LOG2E
let lg10e = Math.LOG10E
let sq2 = Math.SQRT2
let sq12 = Math.SQRT1_2
document.getElementById("demo").innerHTML += `pi: ${pi}, e: ${e}, ln2: ${ln2}, ln10: ${ln10}, log2e:${lg2e}, log10e:${lg10e}, sq2:${sq2}, sq1_2:${sq12} <br>`

// Math Methods
// Number to Integer
//JMath.trunc() and Math.sign() were added to JavaScript 2015 - ES6.
let num1 = -13.56
document.getElementById("demo").innerHTML += Math.round(num1) + "<br>"
document.getElementById("demo").innerHTML += Math.ceil(num1) + "<br>"
document.getElementById("demo").innerHTML += Math.floor(num1) + "<br>"
document.getElementById("demo").innerHTML += Math.round(num1) + "<br>"
document.getElementById("demo").innerHTML += Math.trunc(num1) + "<br>"

document.getElementById("demo").innerHTML += Math.sign(num1) + "<br>"
document.getElementById("demo").innerHTML += Math.sign(0) + "<br>"

document.getElementById("demo").innerHTML += Math.pow(12,9) + "<br>"

document.getElementById("demo").innerHTML += Math.sqrt(15) + "<br>"

document.getElementById("demo").innerHTML += Math.abs(num1)+ "<br>"

document.getElementById("demo").innerHTML += Math.sin(90*(Math.PI/180)) + "<br>"

document.getElementById("demo").innerHTML += Math.cos(90*(Math.PI/180)) + "<br>"

document.getElementById("demo").innerHTML += Math.max(12,24,43,56,18,10) + "<br>"

document.getElementById("demo").innerHTML += Math.min(12,24,43,56,18,10) + "<br>"
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
document.getElementById("demo").innerHTML += Math.random()*10 + "<br>"
// Math.E and Math.log() are twins.
document.getElementById("demo").innerHTML += Math.log(7.8) + "<br>"

document.getElementById("demo").innerHTML += Math.log2(8) + "<br>"

document.getElementById("demo").innerHTML += Math.log10(8) + "<br>"

//Method 	     Description
// abs(x) 	     Returns the absolute value of x
// acos(x) 	     Returns the arccosine of x, in radians
// acosh(x) 	 Returns the hyperbolic arccosine of x
// asin(x) 	     Returns the arcsine of x, in radians
// asinh(x) 	 Returns the hyperbolic arcsine of x
// atan(x) 	     Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x) 	 Returns the arctangent of the quotient of its arguments
// atanh(x) 	 Returns the hyperbolic arctangent of x
// cbrt(x) 	     Returns the cubic root of x
// ceil(x) 	     Returns x, rounded upwards to the nearest integer
// cos(x) 	     Returns the cosine of x (x is in radians)
// cosh(x) 	     Returns the hyperbolic cosine of x
// exp(x) 	     Returns the value of Ex
// floor(x) 	 Returns x, rounded downwards to the nearest integer
// log(x) 	     Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n) 	Returns the number with the highest value
// min(x, y, z, ..., n) 	Returns the number with the lowest value
// pow(x, y) 	 Returns the value of x to the power of y
// random() 	 Returns a random number between 0 and 1
// round(x) 	 Rounds x to the nearest integer
// sign(x) 	     Returns if x is negative, null or positive (-1, 0, 1)
// sin(x) 	     Returns the sine of x (x is in radians)
// sinh(x) 	     Returns the hyperbolic sine of x
// sqrt(x) 	     Returns the square root of x
// tan(x) 	     Returns the tangent of an angle
// tanh(x) 	     Returns the hyperbolic tangent of a number
// trunc(x) 	 Returns the integer part of a number (x)