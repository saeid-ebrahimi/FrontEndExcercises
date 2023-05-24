
// ............... Get Trap in Proxy..............//

let user = {
    id:1 ,
    firstName: "Ahmad",
    lastName : "Ahmadzade",
    age: 24
}
console.log("id" in user)
console.log("phone" in user)

user = new Proxy(user, {
    get: function (target, property){
        // console.log("Target: ", target)
        // console.log("Property: ", property)
        //return target[property] ? target[property] : "[unassigned]"
        return property in target ? target[property] : "[unassigned]"
    },
    set: function (target, property, value){
        // console.log("target: ", target)
        // console.log("property: ", property)
        // console.log("value: ", value)
        if(property === "age" && value < 18){
            value = 18
        }
        if(property === "phone" && value.length < 10){
            value = "xxxxxxxxxx"
        }
        if(property === "type"){
            if(["user", "admin", "teacher", "author"].includes(value.toLowerCase()) )
                target[property] = value
            else{
                throw new Error("This value for type is not valid!!")
            }
        }
        target[property] = value
    }
})
user.phone = "9876535252"
// user.phone = "987653525"
user.age = 16
// user.type = "JS"
user.type = "admin"

console.log("User Object", user.firstName)
console.log("User Object", user.phone)
console.log("User Object", user.age)
