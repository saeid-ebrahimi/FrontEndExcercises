const header1 = document.getElementById("header1")
const button = document.querySelector("button")

button.addEventListener("click",setStyle)

function setStyle(){
    // header1.style.background = "cyan"
    // header1.style.fontSize = "30px"
    // header1.style.fontFamily = "arial"

    header1.style.cssText = "color:cyan;background-color:red;font-size:40px;font-family:arial;"
}