let nums = [10, 30,12 , 53, 11, 17, 4, 35, 24]

let itemRepeatObj = nums.reduce((prevVal, currVal) =>{
    return (prevVal > currVal ? prevVal : currVal)
})

console.log(itemRepeatObj)