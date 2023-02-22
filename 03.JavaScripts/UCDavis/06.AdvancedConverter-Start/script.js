(function(){
    "use strict"
    	let convertType = "miles"
		const heading = document.querySelector("h1")
		const introduction = document.querySelector("p")
		const answerDiv = document.getElementById("answer")
		const form = document.getElementById("convert")
		document.addEventListener("keydown",function(event){
			//const key = event.key
			const key2 = event.code
			if (key2 === "KeyK"){
				convertType = "kilometer"
				heading.innerHTML = "Kilometers to Miles Converter"
				introduction.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles."
			}
			else if( key2 ==="KeyM"){
				convertType = "miles"
				heading.innerHTML = "Miles to Kilometers Converter"
				introduction.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers."

			}
		})
		form.addEventListener("submit",function(event){
			event.preventDefault()
			const distance = parseFloat(document.getElementById("distance").value)
			if (distance){
				if (convertType === "miles"){
					const convert = (distance * 1.609344).toFixed(4)
					answerDiv.innerHTML = `<h2> ${distance} miles converted to ${convert} kilometers</h2>`
				}
				else{
					const convert = (distance * 0.621371192).toFixed(4)
					answerDiv.innerHTML = `<h2> ${distance} kilometers converted to ${convert} miles</h2>`
				}
			}
			else
				answerDiv.innerHTML = "<h2>Please provide a number</h2>"
		})
})()