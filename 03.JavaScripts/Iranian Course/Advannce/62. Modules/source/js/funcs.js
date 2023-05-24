
let users = [
    {id:1, name:"Ali",age:23},
    {id:20, name:"Amin",age:20},
    {id:31, name:"Amir",age:19},
    {id:40, name:"Ahmad",age:18},
    {id:25, name:"Alireza",age:24},
    {id:18, name:"Sasan",age:26},
]
// export let usersCount = users.length // it's not a standard way to export
let usersCount = users.length // it's not a standard way to export
function isLogin(userID){
    let isUserInUsers = users.some(user => user.id === userID)
    return isUserInUsers
}

function userRegister(name, age){
    let newUserObj = {
        id:Math.floor(Math.random()*100),
        name: name ,
        age: age
    }
    users.push(newUserObj)
    return users
}

export {isLogin}
export {userRegister}
//each module can have just one default export
export default usersCount

