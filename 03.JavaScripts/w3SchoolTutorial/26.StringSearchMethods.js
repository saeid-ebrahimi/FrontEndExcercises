
text = "Welcome to Cydemy -Programming Academy- Bro."
//The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

console.log(text.indexOf("Cydemy",5))
console.log(text.lastIndexOf("ro",8))
console.log(text.search("Pro"))
// match() method searches a string for a match against a
// regular expression, and returns the matches, as an Array object.

text = "The rain in SPAIN stays mainly in the plain"
console.log(text)
console.log(text.match(/ain/g))

//include, startsWith, endsWith methods introduced in ES6 (2015)
console.log(text.includes("Rain"))

//string.startsWith(searchvalue, start)
console.log(text.startsWith("rain",3))
//string.endsWith(searchvalue, length)
console.log(text.endsWith("plain"))
console.log(text.endsWith("plain",10))


