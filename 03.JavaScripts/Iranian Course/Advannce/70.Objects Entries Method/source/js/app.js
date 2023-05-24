
let person = {
    id:1 ,
    firstName: "Ali",
    lastName: "Alizade",
    age: 22,
    job: "web developer"
}
console.log(Object.entries(person))
let entriesPerson = Object.entries(person)
for( let personProp of entriesPerson){
    console.log(`${personProp[0]}: ${personProp[1]}`)
}