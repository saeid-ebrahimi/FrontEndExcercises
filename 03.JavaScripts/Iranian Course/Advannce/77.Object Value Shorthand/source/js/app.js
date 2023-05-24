
let id = 1

let userName = "Alireza021"
let age = 23
let job = "Web Developer"

let user = {
    id: id,
    userName: userName,
    age: age,
    job: job
}
let user2 = {
    id,
    userName,
    age,
    job
}
console.log(user)
console.log(user2)

const userMaker = (firstName, lastName, age) => {
    let newUser = {
        firstName,
        lastName,
        age
    }
    return newUser
}
let userAli = userMaker("Alireza", "Alizade", 27)
console.log(userAli)