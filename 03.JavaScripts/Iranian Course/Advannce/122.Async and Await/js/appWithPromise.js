
const userLogin = (username, password) => {
    console.log(`User ${username} with password ${password} logged in`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                username, password, email:"saeid@gmail.com"
            })
        },4000)
    })

}
const userCourses = (username) => {
    const courses = [
        {id:10, title: "Js Course", price:"Free"},
        {id:34 , title: "React", price: "Free"},
    ]
    console.log(`user ${username} courses are:`,courses)
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(courses)
        }, 3000)
    })
}
const mainCourseInfo = (courseTitle) => {
    const desireCourse = {
        id:34,
        title:courseTitle,
        price:"Free",
        teacher: "Mr.X",
        student: 204
    }
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(desireCourse)
        },2000)
    })

}
console.log("site loaded for user")

userLogin("saeid", "32123")
    .then(userObject => userCourses(userObject.username))
    .then(userAllCourses => mainCourseInfo(userAllCourses[0].title))
    .then(mainInfo => console.log(`desire course is`,mainInfo))

console.log("user logged in successfully")
