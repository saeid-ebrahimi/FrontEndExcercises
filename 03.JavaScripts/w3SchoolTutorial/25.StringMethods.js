//All string methods return a new string.
//They don't modify the original string.
//Strings are immutable: Strings cannot be changed, only replaced.
let answer3 = 'He is called "Johnny"'
console.log(answer3.slice(3,8))
//If a parameter is negative, the position is
//counted from the end of the string.
console.log(answer3.slice(-7,-2))
console.log(answer3.substring(3,8))
console.log(answer3.substr(3,5))
console.log(answer3.substr(4))
console.log(answer3.substr(-2))
let text = "please visit Microsoft and Microsoft"
console.log(text+ " changed to: ")
console.log(text.replace("Microsoft", "Cydemy"))
console.log(text.replaceAll("Microsoft", "Cydemy"))
console.log(text.toLowerCase())
console.log(text.toUpperCase())
console.log(text.bold())
console.log(text.concat(" and Cydemy"))
console.log(" hey  what's up    ".trim())
// padStart, padEnd work properly on ECMAScript 2017 and without space texts
console.log("7 turns into: " )
console.log("7".padStart(10,0))
console.log("7gg".padEnd(6,"p"))
// Property access might be a little unpredictable:
//
// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)
console.log(text[1])
console.log(text[-3]) //undefined

// A string can be converted to an array with the split() method:
document.getElementById("demo").innerHTML += text.split(" ")