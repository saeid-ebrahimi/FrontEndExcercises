let name = "cydemy"
for (let lett of name){
    document.getElementById("demo").innerText += lett + "\n"
}
const numbers = [12,65,88,90,-10]
for (let num of numbers){
    document.getElementById("demo").innerText += num + "\n"
}
const fruits =new Set(["banana", "mango", "pineapple", "apple"])
for (const fruit of fruits){
    document.getElementById("demo").innerText += fruit + "\n"
}
const fruits2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
])

for (const f of fruits2) {
  document.getElementById("demo").innerText += f + "\n"
}