const $ = document
const firstName = $.querySelector(".firstname")
const lastName = $.querySelector(".lastname")
const password = $.querySelector(".password")

const form = $.querySelector("#form")
form.addEventListener("submit", function (event){
    event.preventDefault()
    let userData = {
        firstname: firstName.value,
        lastname: lastName.value,
        password: password.value
    }
    fetch("https://js-api-example-default-rtdb.firebaseio.com/users.json", {
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then( res => console.log(res))
        .catch(err => console.log(err))
})

function clearData(){
    firstName.value = ""
    lastName.value = ""
    password.value = ""
}