let numbers = [1, 2, 5, 4, 3, 9]

numbers.map // مقدماتی
numbers.filter // مقدماتی
numbers.reduce // پیشرفته

numbers.reduce((prevValue, currentValue) => {
    console.log(prevValue, currentValue); // 1 2 | 2 5 | 5 4 | 4 3 | 3 9

})
numbers.reduce((prev, curr)=>{
    console.log(prev, curr)
    return prev
})

numbers.reduce((prev, curr)=>{
    console.log(prev, curr)     // 1 2 | "Cydemy" 5 | "Cydemy" 4 | "Cydemy" 3 | "Cydemy" 9
    return "Cydemy"
})

console.log(numbers.reduce((prev, curr)=>{
    console.log(prev, curr)   // 1 2 | 2 5 | 10 4 | 40 3 | 120 9
    return prev*curr
})) //1080