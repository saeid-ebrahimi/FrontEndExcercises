let symbol = Symbol("Symbol 1") // cannot make Symbol via new , symbols are unique, cannot access symbol value
let symbol1 = Symbol("User ID Symbol")
let symbol2 = Symbol("user ID")
let symbol3 = Symbol("user ID")
let symbol4 = Symbol()

console.log(symbol)
console.log(symbol1)
console.log(symbol2)
console.log(symbol3)
console.log(symbol4)
console.log(symbol2 === symbol3)

console.log(typeof symbol1)

let userIDSymbol = Symbol("User ID")

let userObject = {
    id: 1,
    userName: "Amir",
    age: 22,
    [userIDSymbol]: "IJNDSFV-1E2134JMKL" // cannot access via for in loop
}
console.log(userObject)
console.log(userObject[userIDSymbol])

for (let item in userObject){
    console.log(item)
}