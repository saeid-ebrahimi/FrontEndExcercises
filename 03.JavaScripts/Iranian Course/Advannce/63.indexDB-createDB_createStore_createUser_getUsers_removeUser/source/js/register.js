
let $ = document
const registerForm = $.querySelector(".register-form")
const nameInputElem = $.querySelector(".name-input")
const passwordInputElem = $.querySelector(".password-input")
const emailInputElem = $.querySelector(".email-input")
const usersTableElem = $.querySelector("table")
let db = null
let objectStore = null
window.addEventListener("load", function (){
    console.log("Loaded")
    let DBOpenReq = indexedDB.open("Cydemy", 12)
    DBOpenReq.addEventListener("error" , function (err){
        console.warn("Error", err)
    })
    DBOpenReq.addEventListener("success", (event) =>{
        db = event.target.result
        getUsers()
        console.log("Success", event.target.result)
    })
    DBOpenReq.addEventListener("upgradeneeded", (event) => {
        db = event.target.result
        console.log("old Version", event.oldVersion)
        console.log("upgrade", db)
        console.log("new Version", event.newVersion)

        if(!db.objectStoreNames.contains('users')){
            objectStore = db.createObjectStore("users" , {
                keyPath:"userID"
            })
        }
        if(db.objectStoreNames.contains("courses")){
            db.deleteObjectStore("courses")
        }
        //db.createObjectStore("courses")
        console.log(db.objectStoreNames)

    })
})
registerForm.addEventListener("submit", event => {
    event.preventDefault()
    const newUser = {
        userID:Math.floor(Math.random()*9999),
        name: nameInputElem.value,
        password:passwordInputElem.value,
        email: emailInputElem.value,
    }
    let tx = createTransaction("users", 'readwrite')

    let store = tx.objectStore("users")
    let request = store.add(newUser)

    request.addEventListener("error", (error) => {
        console.warn("Request Error", error)

    })
    request.addEventListener("success", (event)=>{
        console.log("Request Success",event)
        clearInputs()
        getUsers()
    })

    console.log("registered!")

})

function clearInputs(){
    nameInputElem.value = ""
    passwordInputElem.value = ""
    emailInputElem.value = ""
}

function getUsers(){
    let tx = createTransaction("users","readonly")

    let store = tx.objectStore("users")
    let req = store.getAll()
    req.addEventListener("error", error =>{
        console.log("Get Request Error", error)
    })
    req.addEventListener("success", event =>{
        console.log("Get Request Success", event)
        let allUsers = event.target.result
        usersTableElem.innerHTML = `<tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Actions</th>
                                    </tr>`
        usersTableElem.innerHTML += allUsers.map( user => {
            return `<tr> 
                        <td>${user.userID}</td>
                        <td>${user.name}</td>
                        <td>${user.password}</td>
                        <td>${user.email}</td>
                        <td><a href="#" onclick="removeUser(${user.userID})">Remove</a></td>
                    </tr>`
        }).join("")

    })

}

function createTransaction(storeName, Mode){
    let tx = db.transaction(storeName, Mode)

    tx.addEventListener("error", (err) => {
        console.warn("Tx Error:",err)
    })
    tx.addEventListener("complete", (event) => {
        console.log("Tx Completed:", event)

    })
    return tx
}

function removeUser(userID){
    console.log(userID)
    let tx = createTransaction("users", "readwrite")
    let store = tx.objectStore("users")
    let req = store.delete(userID)
    req.addEventListener("error", error =>{
        console.log("Delete Request Error", error)
    })
    req.addEventListener("Delete Request Success", event =>{
        getUsers()
    })
}