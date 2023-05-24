// ES6 - Class (setter, getter, extends ,...)
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

    startCoding = () => {
        console.log(`developer ${this.name} starts coding as a/an ${this.job}`)
    }
}

let personAli = new Person()                                                                                             //call constructor
let personAmir = new Person("Amir", 22, "Web Developer", "Tehran, Tajrish")     //call constructor
let personMohamad = new Person("Mohamad", 26, "ios Developer", "Shiraz, Amirkabir" )      //call constructor

personAli.startDev()
personAmir.startDev()
//Person.startDev()  // an error occur!
personMohamad.startCoding()
console.log(personAli)
console.log(personAmir)
console.log(personMohamad)

console.log(Person.age)