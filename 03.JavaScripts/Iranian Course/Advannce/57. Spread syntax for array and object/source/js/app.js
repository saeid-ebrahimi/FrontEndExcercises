let numbers = [12,14,15,18,19,20]
console.log(numbers)
let numbersRef = numbers
numbersRef.push(29)
console.log(numbers)
let copyNumbers = [...numbers]
copyNumbers.push(89)
console.log(copyNumbers)
console.log(numbers)

let nums2 = [33,11,22,44,55,66]
let newConcat = [...numbers,77,88,...nums2]
console.log(newConcat)

function sum(a,b,c,d){
    return a + b + c+d
}

let nums = [23, 54,66,11]

console.log(sum(...nums))


//// spread syntax for objects
const user1 = { id:1 , name:"Reza", age:20}
const user1Ref = user1
user1Ref.age = 31
console.log(user1)

const user1Copy = {...user1}
user1Copy.age = 25
console.log(user1)
console.log(user1Copy)
