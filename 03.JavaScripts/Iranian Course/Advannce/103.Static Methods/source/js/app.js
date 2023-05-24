
class Person{
    constructor(personName, personAge, personJob, personAddress) {
        console.log("an instance created by constructor!")
        this.name = personName
        this.age = personAge
        this.job = personJob
        this.address = personAddress
    }
    startDev(){
        console.log(`developer ${this.name} starts his/her work`)
    }
    static wearingCloth(){
        console.log("Person wears his/her cloth.")
    }
    startCoding = () => {
        console.log(`developer ${this.name} starts coding as a/an ${this.job}`)
    }
}

let personAmir = new Person("Amir", 22, "Web Developer", "Tehran, Tajrish")               //call constructor

personAmir.startDev()
Person.wearingCloth()
//Person.startDev()  // an error occur!
console.log(personAli)
console.log(personAmir)
console.log(personMohamad)

console.log(Person.age)