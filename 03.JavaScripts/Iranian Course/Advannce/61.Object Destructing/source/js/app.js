
let user = {
    id:1,
    name: "Ali",
    age:27
}
let { name:userName, age:userAge=30, id:userId} = user

console.log(userId)
console.log(userName)
console.log(userAge)

const users = [
    { id: 1,name:"ali" ,age:22 ,email:"ali@gmail.com" },
    { id: 2,name:"amin" ,age:24 ,email:"amin@gmail.com" },
    { id: 3,name:"amir" ,age:19 ,email: "amir@gmail.com"},
    { id: 4,name: "akbar",age:20 ,email:"akbar@gmail.com" },
]

const getUser = userID => {
    let mainUser = users.find( user => user.id == userID)
    return mainUser
}

let {name:userName2 , email:userEmail} = getUser(3)
console.log(userName2)
console.log(userEmail)

const userIdInput = document.querySelector("#user-id")
userIdInput.addEventListener("keypress", event => {
    let {keyCode, target:input} = event
        if(keyCode === 13){
            let {name, email} = getUser(input.value)
            console.log("UserName: ", name)
            console.log("UserEmail:", email)
    }
})