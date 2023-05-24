const http = require('http')
let users = [
    {id:1, name:"Ali", age:16},
    {id:2, name: "Amir", age:20},
    {id:3, name: "Ahmad", age:23}
]

let courses = [
    {id:1, title:"JS", price: "free"},
    {id:2, title:"HTML", price: "free"},
    {id:3, title: "CSS", price:"free"}
]

http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Cydemy Platform Index page")
        res.end()
    }else if(req.url==='/api/users'){
        res.write("list of Cydemy users\n")
        res.write(JSON.stringify(users))
        res.end()
    }else if(req.url === "/api/courses"){
        res.write("list of cydemy courses\n")
        res.write(JSON.stringify(courses))
        res.end()
    }
}).listen(3000)

console.log("Server Run on Port 3000")