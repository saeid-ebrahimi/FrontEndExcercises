


class Todo{
    constructor(todoTitle) {
        this.title = todoTitle
        this.isCompleted = false
    }
}

class TodoList{
    constructor(todoContainer) {
        this.todoContainer = todoContainer
        this.addBtn = document.querySelector("#addButton")
        this.clearBtn = document.querySelector("#clearButton")
        this.todoInput = document.querySelector("input")

        this.todos = JSON.parse(localStorage.getItem("todos")) || []
        this.render(this.todos)
    }
    render(todosArr){
        console.log("render just started...")
        this.todoContainer.innerHTML = "";
        this.addTodosToDOM();
        this.saveTodosIntoLocalStorage();
        this.addBtn.addEventListener("click", () => {
            this.addNewTodo(this.todoInput.value)
            this.todoInput.value = ""
        })
        this.clearBtn.addEventListener("click", () => {
            this.clearTodos()
        })

    }
    addTodosToDOM(){
        // console.log("todos added to DOM");
        this.todoContainer.innerHTML = ""
        this.todos.forEach( (todo, todoIdx) => {
            let li = document.createElement("li")
            li.className = "completed well"

            let todoTitleElem = document.createElement("label")
            todoTitleElem.innerHTML = todo.title
            todo.isCompleted ? todoTitleElem.classList.add("todo-completed") : null

            let completeBtn = document.createElement("button")
            completeBtn.className = "btn btn-success"

            todo.isCompleted ?  (completeBtn.innerHTML = 'Incomplete') :  (completeBtn.innerHTML = 'Complete');
            completeBtn.addEventListener("click", (event) => {
                event.target.previousSibling.classList.toggle("todo-completed")
                // console.log(event.target.previousSibling.classList)
                todo.isCompleted = !todo.isCompleted;

                this.saveTodosIntoLocalStorage()
                this.addTodosToDOM()
            })

            let removeBtn = document.createElement("button")
            removeBtn.className = "btn btn-danger"
            removeBtn.innerHTML = "Remove"
            removeBtn.addEventListener("click", event => {
                event.target.parentElement.remove()
                let mainTodoIndex = this.todos.findIndex((todo, index) => index === todoIdx)
                this.todos.splice(mainTodoIndex, 1)
                this.saveTodosIntoLocalStorage()
                this.addTodosToDOM()
            })

            li.append(todoTitleElem, completeBtn, removeBtn)
            this.todoContainer.appendChild(li)
        })

    }
    clearTodos(){
        console.log("all todos cleared")
        this.todos = []
        this.saveTodosIntoLocalStorage()
        this.addTodosToDOM()
    }

    addNewTodo(newTodoTitle){
        // console.log("new todo with title:", newTodoTitle)
        if(newTodoTitle.trim()){
            this.todos.push(new Todo(newTodoTitle))
            this.saveTodosIntoLocalStorage()
            this.addTodosToDOM()
        }
    }
    saveTodosIntoLocalStorage(){
        localStorage.setItem("todos", JSON.stringify(this.todos))
    }
}

const todoApp = new TodoList(document.querySelector("#todoList"))
