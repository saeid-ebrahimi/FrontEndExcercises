//A Map holds key-value pairs where the keys can be any datatype.
//A Map remembers the original insertion order of the keys.

const price = new Map([
    ["phone", 400],
    ["macbook",2500],
    ["watch",1000],
    ["iphone", 600]
    ]
)
price.set("keyboard",100)
console.log(price)
alert(price.get("watch"))
alert(price.size)
price.delete("phone")
alert("price has phone? "+price.has("phone"))

//JavaScript Objects vs Maps
// Differences between JavaScript Objects and Maps:
// 	                    Object	                            Map
// Iterable: 	Not directly iterable 	            Directly iterable
// Size: 	    Do not have a size property 	    Have a size property
// Key Types: 	Keys must be Strings (or Symbols) 	Keys can be any datatype
// Key Order: 	Keys are not well ordered 	        Keys are ordered by insertion
// Defaults: 	Have default keys 	                Do not have default keys

let text1 = ""
price.forEach(function (value, key) {
    text1 += "key: "+key + " ,value: " + value + "\n"
})
document.getElementById("demo").innerText += text1

let text2 = "key, value: \n"
for (const pairs of price.entries()){
    text2 += pairs + "\n"
}
document.getElementById("demo").innerText += text2