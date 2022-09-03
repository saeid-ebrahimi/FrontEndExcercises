console.log(document)
console.dir(document)
// document properties
document.URL
document.title
document.body
document.head
document.links
document.charset
document.doctype

// document methods to grab element from DOM
let d1 = document.getElementById("id1")
const elements = document.getElementsByClassName("class1")
const tags = document.getElementsByTagName("pre")
// Returns the first object matching the CSS style selector
let query = document.querySelector("#id1")
// Returns all objects matching the CSS style selector
const queries = document.querySelectorAll("li")
let allQueries = document.querySelectorAll(".class1")


