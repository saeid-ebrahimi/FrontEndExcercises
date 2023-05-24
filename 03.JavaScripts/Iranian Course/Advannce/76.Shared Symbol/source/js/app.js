
let userIDSymbol = Symbol.for("User ID")

let userObject = {
    id:1 ,
    userName: "Amir",
    age: 22,
    [userIDSymbol] : "IUYGDSD-23W76576O:LKSD"
}
console.log(userObject[Symbol.for("User ID")])
console.log(userObject[userIDSymbol])
console.log(userIDSymbol === Symbol.for("User ID"))
