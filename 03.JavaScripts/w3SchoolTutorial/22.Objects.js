// object elements don't have any order
const car = {
    name: "Fiat",
    model: "500",
    color: "dark red"
}
const person = {
    name: "John",
    age: 40,
    eyeColor: "Brown",
    fullName: function (){
        return this.name +" "+ this.family
    }
}
const myNewObject = {a:"hello", b: [12,34], c:{inside:[22,33]}}
alert(myNewObject["b"][0])
alert(myNewObject["c"]["inside"])
console.dir(myNewObject) // to see entire balky object
person.age = 42
person["family"] = "brown"
alert(car)
alert(person.name)
alert(person.family)
alert(person["age"])
for (key in car){
    console.log(key)
    console.log("=> ", car[key])
}
