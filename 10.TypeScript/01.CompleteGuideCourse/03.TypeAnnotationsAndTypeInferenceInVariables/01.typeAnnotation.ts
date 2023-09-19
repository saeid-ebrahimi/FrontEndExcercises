let apples: number = 72;
// apples: number = "87"; //ts error

let speed: string = "fast";
// speed = 76 //ts error

let hasName: boolean = true;
let notingMuch: null = null ;
let nothing:undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue", "black", "white"];
let myNumbers: number[] = [1,3,5,6,12];
let truths:boolean[] = [true, true, false];

// Classes
class Car{

}
let car: Car = new Car() ;

// Object Literal
let point: {x: number; y: number;} = {
    x:10,
    // x:'owe', //ts error
    y: 20,
    // a: 30 //ts error
};

// Function
const logNumber: (i:number) => void = (i: number) => {
    console.log(i)
}
