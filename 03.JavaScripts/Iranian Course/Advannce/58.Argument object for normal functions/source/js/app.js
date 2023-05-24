
let sum1 = (a,b,c) => {
    //console.log(arguments) // arrow functions don't have arguments object
}
function sum(a , b, c){
    let sumOfArgs = 0
    // arguments.forEach() // cannot use forEach for array-like objects
    let argsArray = Array.from(arguments)
    argsArray.forEach( item => { sumOfArgs += item})
    return sumOfArgs
}
sum1()
console.log(sum(8,9,1,2,4,6,7,2))