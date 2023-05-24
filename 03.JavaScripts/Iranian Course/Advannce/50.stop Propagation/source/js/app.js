const listItem = document.querySelector(".list")
const inputElem = document.querySelector("input")

listItem.addEventListener("click", function (event){
    if(event.target.tagName === "LI"){
        event.target.remove()
    }
})

inputElem.addEventListener("keypress", function (event){
    if(event.keyCode === 13){
        let newItem = document.createElement("li")
        newItem.innerText = inputElem.value
        listItem.append(newItem)
        inputElem.value = ""
    }
})