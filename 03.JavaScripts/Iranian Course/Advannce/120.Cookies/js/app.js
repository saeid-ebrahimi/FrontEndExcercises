const setCookieBtn = document.querySelector("button")
const getCookieBtn = document.querySelector("#get-cookie")
const removeCookieBtn = document.querySelector("#remove-cookie")
const getCookieName = document.querySelector("input")
setCookieBtn.addEventListener("click", () => {
    const now = new Date()
    // console.log(now)
    now.setTime(now.getTime() + (24*60*60*1000)*364 )
    // console.log(now)
    document.cookie = `username=saeid-ebrahimi;path=/;expires=${now}`
    document.cookie = `userage=24;path=/;expires=${now}`
    document.cookie = `userjob=web-developer;path=/;expires=${now}`

})

getCookieBtn.addEventListener("click",() => {
    const cookiesArray = document.cookie.split("; ")
    console.log(cookiesArray) // read all cookies
    let cookieName = "username"
    if(getCookieName.value.trim())
        cookieName = getCookieName.value.trim()
    const desireUsernames = []

    const desireCookies = cookiesArray.filter( cookie => {
        if(cookie.includes(cookieName)){
            desireUsernames.push(cookie.substring(cookie.indexOf("=")+1))
        }
        return cookie.includes(cookieName)
    })
    console.log(desireCookies)
    console.log(desireUsernames)
})

removeCookieBtn.addEventListener("click", function (){
    let cookieName = "username"
    let cookieValue = " "
    if(getCookieName.value.trim()){
        cookieName = getCookieName.value.trim()
    }
    const now = new Date()
    now.setTime(now.getTime()- 24*60*60*1000*2)
    console.log(now)
    document.cookie = `${cookieName}=${cookieValue};path=/;expire=${now}`
})