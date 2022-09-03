//A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.

//Method	    Description
// new Set()	Creates a new Set
// add()	    Adds a new element to the Set
// delete()	    Removes an element from a Set
// has()	    Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	    Returns an iterator with all the values in a Set

// Property	    Description
// size	        Returns the number of elements in a Set

let name = "mike"
const items = new Set(["rose","john", "json", "brock", "shaw"])
alert(items.size)
console.log(items)
items.add(name)
items.add("harley")
//alert(items)
console.log(items)
//If you add equal elements, only the first will be saved
items.add("rose")
// alert(items)  //dont work
console.log(items)
text = ""
items.forEach(function (a) {
    text +="item " + a + "\n"
})
alert(text)
temp = ""
for (const x of items){
    temp += x + "\n"
}
document.getElementById("demo").innerText += temp
// The values() method returns a
// new iterator object containing all the values in a Set

document.getElementById("demo").innerText += "USE VALUES: \n"
temp2 = ""
for (const x of items.values()){
    temp2 += x + "\n"
}
document.getElementById("demo").innerText += temp2
