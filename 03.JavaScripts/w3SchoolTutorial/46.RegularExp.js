// In JavaScript, regular expressions are often
// used with the two string methods: search() and replace().
text = "learn coding in Cydemy academy"
document.getElementById("demo").innerText += text.search("cydemy") + "\n"
document.getElementById("demo").innerText += text.search(/cydemy/i) + "\n"

text2 = "learn coding in Java and Python"
document.getElementById("demo").innerText += text2.replace(/java/i,"Java Script") + "\n"

text3 = "my name is saeid. My coding style is Awesome"
document.getElementById("demo").innerText += text3.replace(/my/ig,"Your") + "\n"

text4 = "my name is saeid.\n My coding style is Awesome"
document.getElementById("demo").innerText += text4.replace(/My/m,"Your") + "\n"
document.getElementById("demo").innerText += text4.replace(/\s/g,"|||") + "\n"

let text5 = "re, green, red, green, gren, gr, blue, yellow"
let result1 = text5.match(/red|green/g)
document.getElementById("demo").innerText += result1 + "\n"
let text6 = "123456789987654321"
let result2 = text6.match(/[1-5]/g)
document.getElementById("demo").innerText += result2 + "\n"
let text7 = "qwertyuuij1234567890kllkjhhgfdszxcnbvcxz"
let result3 = text7.match(/[a-z]/g)
document.getElementById("demo").innerText += result3 + "\n"

text8 = "0 or 1 or 10 or 100 or 1000"
let result4 = text8.match(/10?/g)
document.getElementById("demo").innerText += result4 + "\n"

text9 = "helloooo beautiful world, hello from cydemy."
let result5 = text9.match(/lo*/g)
document.getElementById("demo").innerText += result5 + "\n"







