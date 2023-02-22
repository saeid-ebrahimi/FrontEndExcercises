const $ = document
const inputElem = $.querySelector("input[type='text']")
const maxLength = inputElem.getAttribute("maxlength") 
const counterSpan = $.querySelector(".counter")
let counter = 0
let inputLen = maxLength
//let inputLen = 0
window.onload = function(){
    inputElem.value = ""
}()
// keydown va keypress yek vahed dirtar amal mikonad
inputElem.addEventListener("keydown",keydownHandler)
//inputElem.addEventListener("keypress",keydownHandler)
//inputElem.addEventListener("keyup",keydownHandler)
function keydownHandler(evt){
    if(evt.key === "Backspace"){
        if (inputLen < maxLength)
            inputLen += 1
    }
    else if (evt.key.length === 1){
        if(inputLen >= 1)
            inputLen -= 1
    }
    counterSpan.innerHTML = inputLen
}