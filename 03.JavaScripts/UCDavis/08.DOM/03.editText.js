
let par = document.querySelector("p")
par.textContent = "New Text<br>"
par.textContent += "<strong>bold text here</strong>\n" // \n don't work
par.innerText += "<strong>bold text here</strong>\n" // \n works
par.innerHTML += "<strong>bold text here</strong>"

let special = document.querySelector("#special")
let specialAnc = special.querySelector("a")
console.log(specialAnc.getAttribute("href"))
specialAnc.setAttribute("target","_blank")
specialAnc.setAttribute("href", "https://www.w3resource.com")
