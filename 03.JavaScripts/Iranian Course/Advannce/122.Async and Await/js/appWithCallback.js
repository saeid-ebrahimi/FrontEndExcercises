
const userLogin = (username, password, callback) => {
    setTimeout(() => {
        callback({
            username, password, email:"saeid@gmail.com"
        })
    },4000)
}
const userCourses = (username, callback) => (
    setTimeout(() => {
        callback([
            {id:10, title: "Js Course", price:"Free"},
            {id:34 , title: "React", price: "Free"},
        ])
    }, 3000)
)
const mainCourseInfo = (courseTitle, callback) => {
    setTimeout(() => {
        callback({
            id:34,
            title:"JS Course",
            price:"Free",
            teacher: "Mr.X",
            student: 204
        })
    },2000)
}
console.log("site loaded for user")

let loginInfo ;
userLogin("saeid-ebrahimi", "1920", (userObject) => {
    console.log("user logged in:",userObject)
    userCourses(userObject.username, (userAllCourses) => {
        console.log('User Courses:', userAllCourses)
        mainCourseInfo(userAllCourses[0].title, (mainInfo) => {
            console.log("Main Course Info: ", mainInfo)
        })
    })
})

console.log("user logged in successfully")
