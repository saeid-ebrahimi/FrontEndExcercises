// let mySet = new Set()
//
// mySet.add("Ahmad")
//
// console.log(mySet, "And Size:", mySet.size)

let myWeakSet = new WeakSet()
let fakeObject = {data: "fake Data"}
myWeakSet.add(fakeObject)

console.log(myWeakSet)
//...........................................//
function FakeData(){
    this.data = {data:"fake data"}

}

window.fakeData = new FakeData()

// let mySet = new Set()
// mySet.add(window.fakeData)

let mySet = new WeakSet()
mySet.add(window.fakeData)
console.log(mySet)

delete window.fakeData

console.log(mySet)