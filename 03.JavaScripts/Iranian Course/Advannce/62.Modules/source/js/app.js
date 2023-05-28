// import {isLogin, userRegister} from "./funcs.js"
// import usersLength from "./funcs.js";
import * as funcs from "./funcs"
let newUserName = prompt("Enter user name")
let newUserAge = prompt("Enter user age")

// console.log(userRegister(newUserName, newUserAge))
// console.log(isLogin(6))
// console.log(usersLength)

console.log(funcs.userRegister(newUserName, newUserAge))
console.log(funcs.isLogin(6))
console.log(funcs.default)
