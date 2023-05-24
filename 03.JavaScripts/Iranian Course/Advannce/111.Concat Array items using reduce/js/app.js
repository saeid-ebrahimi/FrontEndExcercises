let namesList = [
    ["ali", "mahdi"],
    ["amin", "karim", "hamid", "asghar"],
    ["amir", "mohammad", "saman"]
]

let concatResult = namesList.reduce((prevList, currentList) => {
    console.log(prevList)
    //return [...prevList,...currentList]
    return prevList.concat(currentList)
} , [])

console.log(concatResult)