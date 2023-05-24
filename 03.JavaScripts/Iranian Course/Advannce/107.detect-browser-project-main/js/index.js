window.addEventListener("load", () => {
    if(window.navigator.userAgent){
        let userAgent = window.navigator.userAgent
        let userBrowser = null
        if (userAgent.match(/edg/i)){
            userBrowser = "edge"
        }else if (userAgent.match(/firefox/i)){
            userBrowser = "firefox"
        }else if (userAgent.match(/opr/i)){
            userBrowser = "opera"
        }else if (userAgent.match(/chrome/i)){
            userBrowser = "chrome"
        }else if (userAgent.match(/safari/i)){
            userBrowser = "safari"
        }
        let userBrowserImgElem = document.querySelector(`.${userBrowser}`)
        if(userBrowserImgElem){
            userBrowserImgElem.style.opacity = "1"
        }
    }

})