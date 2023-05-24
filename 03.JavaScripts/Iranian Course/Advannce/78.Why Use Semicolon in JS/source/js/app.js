
// engine adds semicolon to the end of each line! (ASI: Automatic Semicolon Insertion)

// exceptions
let numbers = [1,2,3,5,6,4]; // if we don't add semicolon we get errors because next line starts with [
["ali", "amin", "babak"].map(name => console.log(name))

const nums = [1, 2, 3, 4, 5]

nums.forEach(num => console.log(num)); // if next line starts with ( , engine automatically concat two lines

(function (){
    console.log("IIF ;7))")
})()

const userGenerator = (userName, age, job) => {
    return {    // engine when see return it end the line with semicolon
        userName,
        age,
        job
    }
}

let userAli = userGenerator("Ali", 18, "Coder")
console.log(userAli)

let a = 6
let b = 7 + 98 ;
(a + "Ali".toLowerCase())