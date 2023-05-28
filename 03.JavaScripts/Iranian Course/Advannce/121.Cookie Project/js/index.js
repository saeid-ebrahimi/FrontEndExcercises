
function getCookie (cookieName) {
    let cookiesArray = document.cookie.split(';')

    let mainCookie = null
    const desireCookiesValues = []

    const desireCookies = cookiesArray.filter( cookie => {
        if(cookie.includes(cookieName)){
            desireCookiesValues.push(cookie.substring(cookie.indexOf("=")+1))
        }
        return cookie.includes(cookieName)
    })
    return desireCookiesValues
}

window.addEventListener("load", () => {
   let loggedInUser =  getCookie('login-token')
    console.log(loggedInUser)
    if(loggedInUser.length === 0){
        location.href = "http://localhost:63342/Iranian%20Course/Advannce/121.Cookie Project/login.html"
    }
})