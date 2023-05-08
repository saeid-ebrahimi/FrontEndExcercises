const $ = document
const inputElem = $.querySelector("input")
const addTodoFrom = $.querySelector(".add")
const container  = $.querySelector(".todos")

addTodoFrom.addEventListener("submit",function(evt){
    evt.preventDefault()
})
inputElem.addEventListener("keydown",function(event){
    let newTodoValue = event.target.value.trim()
    //console.log(event.key)
    if (event.key ==="Enter")
    {
        addNewTodo(newTodoValue)
        inputElem.value = ""
    }
})

function addNewTodo(newTodoValue){
    const newLi = $.createElement("li")
    newLi.className = "list-group-item d-flex justify-content-between align-items-center"
    const newSpan = $.createElement("span")
    newSpan.innerHTML = newTodoValue
    const newTrash = $.createElement("i")
    newTrash.className = "fa fa-trash-o delete"
    newTrash.addEventListener("click",function(event){
        event.target.parentElement.remove()
        alert(event.target.previousElementSibling.innerHTML+" removed")
    })
    newLi.append(newSpan,newTrash)
    container.append(newLi)
}