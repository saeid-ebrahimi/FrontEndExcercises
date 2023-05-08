
const contextMenu = document.getElementById("contextMenu")

document.body.addEventListener("click", function (event){
    contextMenu.style.display = "none"
})

document.body.addEventListener("keydown", function (event){
    if (event.key === "Escape"){
        contextMenu.style.display = "none"
    }
})

document.body.addEventListener("contextmenu" , function (event){
    event.preventDefault()
    let xPos = event.pageX
    let yPos = event.pageY
    if( xPos >= window.innerWidth - 200){
        xPos -= 200
    }
    if( yPos >= window.innerHeight - 300){
        yPos -= 300
    }
    if(contextMenu.style.display === "none"){
        contextMenu.style.display = "block"
        contextMenu.style.left = xPos + "px"
        contextMenu.style.top = yPos + "px"
    }else{
        contextMenu.style.left = xPos + "px"
        contextMenu.style.top = yPos + "px"
    }
})
