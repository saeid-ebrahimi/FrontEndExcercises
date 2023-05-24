
let scores = [ 12, 17, 89, 90, 76, 54, 32, 11, 31, 17, 12]

let user = {
    id: 1,
    username: "Amin",
    age:22,
}

// set and map
//......................... SET ............................//

let numbers = new Set()
numbers.add(20)
numbers.add(12)
numbers.add(20)
numbers.add(23)
numbers.add(12)
numbers.add(10)
numbers.add(90)
numbers.add(100)

console.log(numbers.has(23))
console.log(numbers,"size:",  numbers.size)

numbers.delete(12)
console.log(numbers, "size:",  numbers.size)

numbers.clear()
console.log(numbers, "size:",  numbers.size)

numbers.forEach(number => {console.log(number)})

let scoreSet = new Set(scores)
console.log("score set: ",scoreSet)
for(let item of scoreSet){
    console.log(item)
}

let newSet = new Set([12, 76, 8, 98, 53])
console.log(newSet)

// set to array

let arrayNumbers = [...scoreSet]
console.log(arrayNumbers)


/////////////////////////////////////////

let userName = "Mohammad Amin"
console.log(userName)
let userNameSet = new Set(userName)
console.log(userNameSet)


//....................................//
let items = [
    {id:1},
    {id:2},
    {id:3}
]

let itemsSet = new Set(items)
console.log(itemsSet)
console.log(itemsSet.has({id:2}))


