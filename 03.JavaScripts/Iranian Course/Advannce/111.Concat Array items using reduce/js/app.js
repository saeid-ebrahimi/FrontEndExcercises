let nums = [1, 3,12 , 90, 100, 12, 4, 3, 100]
let initialVal = {}

let itemRepeatObj = nums.reduce((prevObj, currVal) =>{
    return {...prevObj,[currVal] : (prevObj[currVal] || 0) + 1}
}, initialVal)

console.log(itemRepeatObj)