let newText = `Hello my dear friend,
I gonna call you soon.
sincerely "Mr. X"`
console.log(newText)
let age = 18
let city = "London"
let height = 67
let info = `my name is Mike and I'm ${age} years old and my height is ${height*3.2}cm.
I'm from ${city}`
console.log(info)

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2>
<ul>`
for (let str of tags)
    html += `<li> ${str}</li>`
html += "</ul>"

document.getElementById("demo").innerHTML = html