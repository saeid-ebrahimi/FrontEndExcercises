
let x1 = 14.98
console.log(x1.toString() + "apples")
console.log((23+91).toString())

let x2 = 254.7612
console.log(x2.toExponential(2))
console.log(x2.toExponential(3))
console.log(x2.toExponential(5))

let x3 = 13.923e4
console.log(x3.toFixed(4))
console.log(x3.toFixed(6))

console.log(x3.toPrecision(4))
console.log(x3.toPrecision(3))
//The valueOf() method is used internally in JavaScript
// to convert Number objects to primitive values.
//All JavaScript data types have a valueOf() and a toString() method.
let x4 = new Number(14.78)
let x5 = x4.valueOf()
console.log(x5)

//Global JavaScript Methods

console.log(Number("19.72"))
console.log(Number("  10.231  "))
console.log(Number("Apple")) //NaN(Not a Number) returns
// Number() can also convert a date to a number.
// The Number() method returns the number of milliseconds since 1.1.1970.
console.log(Number(new Date("1970-01-01")))
console.log(Number(new Date("1970-04-01")))

console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("10"))
console.log(parseInt("10.33"))
console.log(parseInt("10 20 30"))
console.log(parseInt("10 years"))
console.log(parseInt("years 10"))

console.log(parseFloat("10"))
console.log(parseFloat("10.33"))
console.log(parseFloat("10 20 30"))
console.log(parseFloat("10 years"))
console.log(parseFloat("years 10"))

// Number Properties
console.log(Number.MAX_VALUE)
console.log(Number.EPSILON)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NaN)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)
console.log(1 / 0)
