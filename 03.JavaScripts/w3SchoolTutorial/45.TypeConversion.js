// string to number
document.getElementById("demo").innerText +=Number("12.78") +"\n"
document.getElementById("demo").innerText +=Number(" ") + "\n"
document.getElementById("demo").innerText +=Number("") + "\n"
document.getElementById("demo").innerText +=Number("21 12") + "\n"
document.getElementById("demo").innerText += parseInt("24.6") + "\n"
document.getElementById("demo").innerText += parseFloat("13.9") + "\n"

// unary + op
let x = "1234"
let y = + x
document.getElementById("demo").innerText += typeof y +"\n"
let name = "benny"
let num = + name
document.getElementById("demo").innerText += num + "\n"

// number to string
document.getElementById("demo").innerText += String(1276) + "\n"
document.getElementById("demo").innerText += 17.98.toString() + "\n"
document.getElementById("demo").innerText += 13242352.134.toExponential() + "\n"
document.getElementById("demo").innerText += 454123.98.toFixed(4)
document.getElementById("demo").innerText += 2342423123.213.toPrecision(4)

// date to number
const d1 = new Date()
document.getElementById("demo").innerText += d1.getTime() +"\n"
document.getElementById("demo").innerText += Number(d1) +"\n"

// date to string
document.getElementById("demo").innerText += d1.toString() +"\n"
document.getElementById("demo").innerText += String(d1) +"\n"

// boolean to Number
document.getElementById("demo").innerText += Number(true) +"\n"
document.getElementById("demo").innerText += Number(false) +"\n"

// boolean to string
document.getElementById("demo").innerText += String(true) +"\n"
document.getElementById("demo").innerText += false.toString() +"\n"

// automatic conversion
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

// Automatic String Conversion
document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"