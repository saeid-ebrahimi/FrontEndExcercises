let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

function dataValidation() {
    const userValue = userNameInput.value
    const passValue = passwordInput.value
    if (userValue.length < 12 || passValue.length < 8){
        modal.style.backgroundColor = "red"
        modal.innerHTML = "username length is less than 12 or password length is less than 8"
        modal.style.display = "inline"
        setTimeout(function(){
            modal.style.display = "none"
        },3000)
    }else{
        modal.style.backgroundColor = "green"
        modal.innerHTML = "entered successfully"
        modal.style.display = "inline"
        setTimeout(function(){
            modal.style.display = "none"
        },3000)
    }
}