import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1"
interface Todo{
    id: number;
    title: string;
    completed: boolean;
}
axios.get(url).then(res => {
    const {id: id, title: title, completed: completed} = res.data as Todo;
    logTodo(id, title, completed)
})
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `);
}