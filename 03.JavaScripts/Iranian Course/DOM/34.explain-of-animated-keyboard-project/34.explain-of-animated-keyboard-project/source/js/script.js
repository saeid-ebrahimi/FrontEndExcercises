let capsLock = false
const titleElem = document.querySelector(".title")
document.addEventListener("keyup",function(event){
    appendValue(event)
    const key = event.key.toUpperCase()
    const mainKey = document.getElementById(key)
    mainKey.classList.add("hit")
    mainKey.addEventListener("animationend",function(){
        mainKey.classList.remove("hit")
    })
})


function appendValue(event){
    if(event.key == "Backspace"){
         titleElem.innerHTML = titleElem.innerHTML.slice(0,-1)
    }else if(capsLock){
        titleElem.innerHTML += event.key
    }else{
        titleElem.innerHTML += event.key.toUpperCase()
    }
}