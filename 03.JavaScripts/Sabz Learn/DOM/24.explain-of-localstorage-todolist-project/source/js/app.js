const $ = document
const inputItem = $.getElementById("itemInput")
const addBtn = $.getElementById("addButton")
const clearBtn = $.getElementById("clearButton")
const todoListElem = $.getElementById("todoList")

let todoArrays = []

addBtn.addEventListener("click",addNewTodo)
window.addEventListener("load",getLocalStorage)
clearBtn.addEventListener("click",clearTodos)
inputItem.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        addNewTodo()
    }
})

function addNewTodo(){
    let newTodoTitle = inputItem.value
    if (newTodoTitle.trim() !== ""){
        let newTodoObject = {
            id: todoArrays.length + 1,
            title: newTodoTitle,
            complete: false
        }
        
        todoArrays.push(newTodoObject)
        setLocalStorage(todoArrays)
        todoGenerator(todoArrays)
    }
    inputItem.value = ""
    inputItem.focus()
}
function setLocalStorage(todoList){
    localStorage.setItem("todos",JSON.stringify(todoList))   
}
function todoGenerator(todoList){
    todoListElem.innerHTML = ""
    todoList.forEach(todo => {
        const newTodoLiElem = $.createElement("li")
        newTodoLiElem.className = "completed well"

        const newToodLabel = $.createElement("label")
        newToodLabel.innerText = todo.title

        const newTodoCompBtn = $.createElement("button")
        newTodoCompBtn.innerHTML = "Complete"
        newTodoCompBtn.className = "btn btn-success"
        newTodoCompBtn.setAttribute("onclick","editTodo("+todo.id+")")

        const newTodoDelBtn = $.createElement("button")
        newTodoDelBtn.innerHTML = "Delete"
        newTodoDelBtn.className = "btn btn-danger"
        newTodoDelBtn.setAttribute("onclick","removeTodo("+todo.id+")")

        newTodoLiElem.append(newToodLabel,newTodoCompBtn,newTodoDelBtn)
        todoListElem.append(newTodoLiElem)
        if (todo.complete){
            newTodoLiElem.className = "uncompleted well"
            newTodoCompBtn.innerText = "Uncompleted"
        }
    });
}
function editTodo(todoId){
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"))
    todoArrays = localStorageTodos
    todoArrays.forEach(todo => {
        if(todo.id === todoId){
            todo.complete = !(todo.complete)
        }
    })
    setLocalStorage(todoArrays)
    todoGenerator(todoArrays)
}
function removeTodo(todoId){
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"))
    const todoArrays = localStorageTodos
    const mainTodoIndex = todoArrays.findIndex( todo => {
        return todo.id === todoId 
    })
    todoArrays.splice(mainTodoIndex,1)
    setLocalStorage(todoArrays)
    todoGenerator(todoArrays)
}
function getLocalStorage(){
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"))
    if (localStorageTodos){
        todoArrays = localStorageTodos
    }else{
        todoArrays = []
    }
    todoGenerator(todoArrays)

}
function clearTodos(){
    todoArrays = []
    todoGenerator(todoArrays)
    localStorage.removeItem("todos")
}