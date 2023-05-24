// rest operator should be last parameter
const sum = (...args) => {
    let sumOfAll = 0
    args.forEach( (arg) => { sumOfAll += arg})
    return sumOfAll
}

console.log(sum(8,9,1,2,4,6,7,2))