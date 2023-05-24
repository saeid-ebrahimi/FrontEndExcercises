// https://jsonplaceholder.typicode.com/
window.addEventListener("load", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(resp => resp.json())
        .then( data => {
            console.log(data)
        }).catch( err => {
            console.warn(err)
    })
})

let url = "https://jsonplaceholder.typicode.com/posts/"
const postID = prompt("Enter the desire post id")

fetch(url+postID )
    .then( resp => resp.json())
    .then( mainPost => {
        console.log(mainPost)
    })