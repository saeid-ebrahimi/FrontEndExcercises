
const todoInputElem = document.querySelector(".todo-input")
const todoList = document.querySelector(".todolist")

function trim(val){
    return val.trim()
}

function toLowerCase(val){
    return val.toLowerCase()
}

function insertToLi(todoVal){
    return "<li>"+ todoVal + "</li>"
}
// function composition means call a function as other function argument
function addTodo(event){
    if(event.charCode === 13){

        todoList.insertAdjacentHTML("beforeend", insertToLi(toLowerCase(trim(todoInputElem.value))))
        todoInputElem.value = ""
    }
}
todoInputElem.addEventListener("keypress", addTodo)