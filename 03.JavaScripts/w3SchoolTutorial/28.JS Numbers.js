let x1 = 3.14;    // A number with decimals
let y1 = 3;       // A number without decimals
let x2 = 123e5;    // 12300000
let y2 = 123e-5;   // 0.00123
let z1 = x + y;
let z4 = "The result is: " + x1 + y1;
//JavaScript numbers are always stored as double precision
// floating point numbers, following the international IEEE 754 standard.
//
// This format stores numbers in 64 bits, where the number (the fraction)
// is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63

let x3 = "10";
let y3 = "20";
let z2 = x3 + y3;
let z3 = x1 + y3
//JavaScript will try to convert strings to numbers in all numeric operations:
let x4 = "100";
let y4 = "10";
let z5 = x4 / y4;
let z6 = x4 * y4
let z7 = x4 - y4
let z8 = x4 + y4
let m = 100 / "10" // results 10
// NaN
let n = 100 / "boy" // results NaN
console.log (isNaN(n))
console.log(NaN + 5)
console.log(NaN+"8")
console.log(typeof NaN) // results Number
// Infinity (or -Infinity) is the value JavaScript will return if
// you calculate a number outside the largest possible number.
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
let a = 2 / 0
let b = -2 / 0
console.log(typeof Infinity)  // Number
//Hexadecimal
// JavaScript interprets numeric constants as
// hexadecimal if they are preceded by 0x.
let c = 0xaF
//Never write a number with a leading zero (like 07).
// Some JavaScript versions interpret
// numbers as octal if they are written with a leading zero.
let d = 0o54 // octal
//By default, JavaScript displays numbers as base 10 decimals.
//
// But you can use the toString() method to output numbers from base 2 to base 36.
let num = 56
console.log(num.toString(2))
console.log(num.toString(4))
console.log(num.toString(8))
console.log(num.toString(16))
console.log(num.toString(32))
console.log(num.toString(36))
//
//Normally JavaScript numbers are primitive values created from literals:
//
let e = 123;
let f = new Number(123)

//Do not create Number objects.
//
// The new keyword complicates the code and slows down execution speed.
//
// Number Objects can produce unexpected results:
//When using the == operator, x and y are equal:
//
let g = 500;
let h = new Number(500);
// When using the === operator, x and y are not equal.
//
let i = 500;
let j = new Number(500);

// Note the difference between (x==y) and (x===y).
//
// Comparing two JavaScript objects always returns false.

let k = new Number(500);
let l = new Number(500);

let o = new Number(500);
let p = new Number(500);
