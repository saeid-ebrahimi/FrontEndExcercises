const $ = document
let userNameInput = $.querySelector('.username')
let passwordInput = $.querySelector('.password')
let modal = $.querySelector('.modal')
// onkeypress just contain alphanumeric keys
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
function userValidation(){
    const userSpan = $.querySelector(".username-validation")
    userSpan.classList.
    console.log(userNameInput.value.length)
    if (userNameInput.value.length < 12){
        userSpan.innerHTML = "username must contains at least 12 characters"
        userSpan.style.color = "red"
    }else{
        userSpan.innerHTML = "valid username entered"
        userSpan.style.color = "green"
        
    }
}
function passValidation(){
    const passSpan = $.querySelector(".password-validation")
    
    console.log(passwordInput.value.length)
    if (passwordInput.value.length < 8){
        passSpan.innerHTML = "password must contains at least 8 characters"
        passSpan.style.color = "red"
    }else{
        passSpan.innerHTML = "valid password entered"
        passSpan.style.color = "green"
        
    }
}