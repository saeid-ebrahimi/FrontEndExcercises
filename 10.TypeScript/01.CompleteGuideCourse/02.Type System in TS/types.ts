const today:Date = new Date();
today.getMonth();
// today.day() //ts error
interface Person {
    age: number;
    name: string;
}
const person = {
    age: 20 ,
    name: "Jane"
} as Person;
// person.asd // ts error

class Color{

}
const red = new Color()

interface Todo{
    id:number;
    title: string;
    completed: boolean;
}

const todo = { id: 1, title: "Learn Typescript", completed: false };
console.log(todo);
