(function(){
    "use strict"
  document.getElementById("convert").addEventListener("submit",function(evt){
			evt.preventDefault()
			const distance = parseFloat(document.getElementById("distance").value)
			const answer = document.getElementById("answer")
			if(distance){
				// let conversion = Math.round(distance*1.609344*10000)/10000
				const conversion = (distance*1.609344).toFixed(4)
				answer.innerHTML = `<h2>convert ${distance} miles to ${conversion} kilometers</h2>`
			}
			else{
				answer.innerHTML = `<h2>Please Provide a Number!</h2>`
			}
		})
})()
