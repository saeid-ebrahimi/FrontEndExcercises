let capsLock = false
const titleElem = document.querySelector(".title")
document.addEventListener("keyup",function(event){
    appendValue(event)
    let key
    let mainKey
    if(event.key.length === 1) {
        key = event.key.toUpperCase()
        mainKey = document.getElementById(key)
    }else{
        key = event.key.toLowerCase()
        if(event.key !== "Shift")
            mainKey = document.getElementById(key)
        else {
            if(event.location === 1)
                mainKey = document.getElementById("left-shift")
            else if(event.location === 2)
                mainKey = document.getElementById("right-shift")
        }
    }
    mainKey.classList.add("hit")
    mainKey.addEventListener("animationend",function(){
        mainKey.classList.remove("hit")
    })
})

function appendValue(evt){
    if(evt.key === "Backspace"){
        titleElem.innerHTML = titleElem.innerHTML.slice(0,-1)
    }else if(evt.key === "CapsLock"){
        capsLock = !capsLock
    }else if(evt.key === "Enter"){
        titleElem.innerText += "\n"
    }
    else if(!capsLock){
        if (evt.key.length ===1)
            titleElem.innerHTML += evt.key
    }else{
        if (evt.key.length ===1)
            titleElem.innerHTML += evt.key.toUpperCase()
    }
}