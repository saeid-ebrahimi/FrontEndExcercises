let users = [
    {id:1, name:"Reza", score:80},
    {id:2, name:"Ramin", score:70},
    {id:3, name:"Romina", score:86},
    {id:4, name:"Rose", score:75},
    {id:5, name:"Ray", score:70},
    {id:6, name:"Raymond", score:68},
]
users.reduce((prevUser, currUser) => {
    console.log(prevUser.score, currUser.score)
    return currUser
})

let itemRepeatObj = users.reduce((prevScore, currUser) =>{
    return (prevScore > currUser["score"] ? prevScore : currUser["score"])
}, 0)

console.log("Max score is",itemRepeatObj)