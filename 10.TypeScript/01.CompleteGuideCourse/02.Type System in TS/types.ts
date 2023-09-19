const today = new Date();
today.getMonth();
// today.day() //ts error

const person = {
    age: 20 ,
    name: "Jane"
};
// person.asd // ts error

class Color{

}
const red = new Color()

interface Todo{
    id:number;
    title: string;
    completed: boolean;
}