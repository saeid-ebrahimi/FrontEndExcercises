
let user = [1, "John", 32]
let [userID, userName, userAge=25, userCity= "Tehran"] = user
console.log(userID)
console.log(userName)
console.log(userAge)
console.log(userCity)
const showNumbers = () => [1, 3,4,5,6,9,7,2]

let [first,second,, , third,...rest] = showNumbers()
console.log(first)
console.log(second)
console.log(third)
console.log(rest)
