let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

function dataValidation() {
    const userValue = userNameInput.value
    const passValue = passwordInput.value
    if (userValue.length < 12 || passValue.length < 8){
        modal.style.backgroundColor = "rgb(223, 28, 28)"
        modal.innerText = "username field Characters are less than 12 or field Characters are less than 8"
        modal.style.display = "inline"
    }else{
        modal.style.backgroundColor = "green"
        modal.innerHTML = "entered successfully"
        modal.style.display = "inline"

    }
    setTimeout(function(){
        modal.style.display = "none"
    },3000)
}