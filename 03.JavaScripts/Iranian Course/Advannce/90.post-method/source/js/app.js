const $ = document

const firstName = $.querySelector(".firstname")
const lastName = $.querySelector(".lastname")
const password = $.querySelector(".password")
const button = $.querySelector("button")

button.addEventListener("click", event => {
    event.preventDefault()
    let userData = {
        firstname: firstName.value,
        lastname: lastName.value,
        password: password.value,
    }

    fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then( res => console.log(res))
})