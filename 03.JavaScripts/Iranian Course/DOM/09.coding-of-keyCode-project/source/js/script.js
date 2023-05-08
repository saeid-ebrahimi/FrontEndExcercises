const $ = document
const locationKey = $.querySelector("#location")
const title = $.querySelector("title")
const starter = $.getElementById("starter")
const ascii = $.getElementById("ascii")
const infos = $.getElementById("infos")

const keyCodeElem = $.getElementById("keyCode")
const keyElem = $.getElementById("key")
const locationElem = $.getElementById("location")
const whichElem = $.getElementById("which")
const codeElem = $.getElementById("code")

document.body.addEventListener("keydown",function(event){
	event.preventDefault()
	starter.style.display = "none"
	ascii.style.display = "flex"
	ascii.style.display = "flex"
	infos.style.display = "flex"
	console.log(event)

	keyCodeElem.innerHTML  = event.keyCode
	keyElem.innerHTML = event.key
	locationElem.innerHTML = event.location
	whichElem.innerHTML = event.which
	codeElem.innerHTML = event.code

})