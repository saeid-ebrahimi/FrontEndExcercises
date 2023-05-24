
const user = {
    id:1,
    username: "Amin",
    age:26
}
const user2 = {
    id:1,
    username: "Ali",
    age:19
}

function showUser(score, city) {
    console.log(this.username + " is "+ this.age + " years old ;) => score: ", score, "city "+ city)
}

// showUser.call(user, 20, "Tabriz")
// showUser.call(user2, 15, "Tehran")

// showUser.apply(user,[20, "Tabriz"])
// showUser.apply(user2,[15, "Tehran"])

showUser.bind(user, 20, "Tabriz")() //bind make a higher order functions
showUser.bind(user2, 15, "Tehran")()

const bindingFunc = showUser.bind(user, 15, "Tehran")
bindingFunc()