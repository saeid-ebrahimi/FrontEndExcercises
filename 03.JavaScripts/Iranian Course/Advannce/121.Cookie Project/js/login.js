const $ = document
const usernameInput = $.querySelector('#username')
const passwordInput = $.querySelector('#password')
const rememberMeCheckbox = $.querySelector('.ck')
const loginBtn = $.querySelector('button')

function setCookie (cookieName, cookieValue, exDay) {
    const now = new Date()
    
    now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000)

    document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`
}



function clearInput () {
    usernameInput.value = ''
    passwordInput.value = ''
}

loginBtn.addEventListener('click', event => {
    event.preventDefault()

    if (rememberMeCheckbox.checked) {
        setCookie('login-token', usernameInput.value, 10)
    }
    clearInput()

})