//
// let userAli= {
//     id:1,
//     username: "Ali",
//     age:22,
//     city: "Tbz",
//     job:"JS Developer"
// }
// let userAmin= {
//     id:2,
//     username: "Amin",
//     age:20,
//     city: "Tbz",
//     job:"Python Developer"
// }
//
// let userAmir= {
//     id:3,
//     username: "Amir",
//     age:24,
//     city: "Shz",
//     job:"C++ Developer"
// }
//
// let userMohammad= {
//     id:4,
//     username: "Mohammad",
//     age:25,
//     city: "Thr",
//     job:"React Developer"
// }
//
// let userBabak= {
//     id:5,
//     username: "Babak",
//     age:28,
//     city: "Isf",
//     job:"Java Developer"
// }
/////////////////////////////////////////////

// function Animal(){
//     this.name = "dog"
//     this.color = "brown"
//     this.canFly = false
//     this.footCount = 4
//
// }
//
// let dogAnimal = new Animal()
// console.log(dogAnimal)
//
// let dogAnimal2 = new Animal()
// console.log(dogAnimal2)

///////////////////////////////////////
function Person(personID, personUsername, personAge, personCity, personJob, personType){
    this.id= personID
    this.username = personUsername
    this.age = personAge
    this.city = personCity
    this.job = personJob
    this.type = personType

}

let userAli = new Person(1, "Ali", 19, "Tbz", "Digital Marketing", "user")
console.log(userAli)
let userAmin = new Person(2, "Amin", 18, "Shz", "Android Developer", "admin")
console.log(userAli)