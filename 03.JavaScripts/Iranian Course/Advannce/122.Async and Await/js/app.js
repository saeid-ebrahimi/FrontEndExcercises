
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
            //resolve(courses)
            reject('an Error in loading username')
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
async function runUserCodes() {
    try {
        let userInfo = await userLogin("saeid", "82374")
        let userAllCourses = await userCourses(userInfo.username)
        let mainInfo = await mainCourseInfo(userAllCourses[0].title)
        console.log(`desire course is`,mainInfo)
    }catch (error){
        console.warn("the problem is:",error)
        alert("the problem is: "+error+"\nplease try again!")
    }

}
console.log("site loaded for user")
runUserCodes()
console.log("user logged in successfully")
