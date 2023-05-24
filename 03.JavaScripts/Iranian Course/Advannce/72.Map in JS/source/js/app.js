//................ Map ...............//

let user = {
    id: 1,
    firstName: "Ahmad",
    lastName: "Heidari",
    age: 23
}

console.log(user)

let userMap = new Map()
userMap.set("id", 1)
userMap.set("firstName", "Alireza")
userMap.set("lastName", "Alizade")
userMap.set("age", 25)

userMap.delete("age")

console.log(userMap, "and Size: ", userMap.size)
console.log(userMap.has("firstName"))
console.log(userMap.has("email"))

console.log(userMap.get("firstName"))

// userMap.clear()

userMap.forEach((value, key) => console.log(key, ": ", value))

//.................. convert from object to map and reverse .................//
let userMap2 = new Map(Object.entries(user))
console.log(user)
console.log(userMap2)

let newUser = Object.fromEntries(userMap2)
console.log(newUser)