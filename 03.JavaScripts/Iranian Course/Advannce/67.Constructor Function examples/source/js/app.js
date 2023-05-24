
function User(userName, userAge, userJob) {  // cannot use arrow functions as constructor
    this.name = userName
    this.age = userAge
    this.job = userJob
    this.getName =  function (){
        return this.name
    }
    this.getAge = function(){
        return this.age
    }
    this.getJob =  function(){
        return this.job
    }

    this.setName = function (newName){
        this.name = newName
    }
    this.setAge = function (newAge){
        this.age = newAge
    }
    this.setJob = function (newJob){
        this.job = newJob
    }

}

let userAli = new User("Ali", 20, "Android Developer")
console.log(userAli.getAge())
userAli.setAge(25)
console.log(userAli.getAge())