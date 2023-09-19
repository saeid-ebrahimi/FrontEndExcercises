// we always rely on type inference but in some cases we use type annotation

//when to use type annotation
//1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
// with 'any' type we can have : coordinates.sdassdkn
// to solve
const coordinates2 :{x:number, y:number} = JSON.parse(json)
console.log(coordinates);

//2) when we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"] ;
let foundWord: boolean;

for (let i=0; i< words.length; i++){
    if(words[i] === "green"){
        foundWord = true;
    }
}

// 3) variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12]

let numberAboveZero: boolean | number = false;
for (let i=0; i < numbers.length; i++){
    if (numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}
let usersFavoriteMedia ;