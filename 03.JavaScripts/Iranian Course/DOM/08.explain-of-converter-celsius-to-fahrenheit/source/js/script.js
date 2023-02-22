const $ = document
const first = $.querySelector(".C")
const second =  $.querySelector(".F")
const converter = $.querySelector("#converter")
const result = $.querySelector(".result")
const convertButton = $.querySelector(".convertButton")
const resetButton = $.querySelector(".resetButton")
const changeButton = $.querySelector(".changeButton")

function convert(){
    const initialValue = Number(converter.value)
    
    if(initialValue){
        if (first.innerHTML === "°C"){
            const finalValue = (initialValue*(9/5)).toFixed(4) + 32
            result.innerHTML = initialValue + " °C to " + finalValue + " °F "
            
        }
        else if(first.innerHTML === "°F")
        {   const finalValue = (initialValue-32)*(5/9).toFixed(4)
            result.innerHTML = initialValue + " °F to " + finalValue + " °C "
        }
        result.style.color = "rgb(255,255,102)"
    }else{
        result.innerHTML = "insert a valid input please!"
        result.style.color = "#993300"
    }
}

function reset(){
    result.innerHTML = ""
    converter.value = ""
}

function swap(){
    if(first.innerHTML === "°C"){
        first.innerHTML = "°F"
        second.innerHTML = "°C"
        converter.setAttribute("placeholder","°C")
        document.title = "Temperature Conversion | °F to °C"
    }else if(first.innerHTML === "°F"){
        first.innerHTML = "°C"
        second.innerHTML = "°F"
        converter.setAttribute("placeholder","°F")
        document.title = "Temperature Conversion | °C to °F"
    }

}

convertButton.addEventListener("click",convert)
resetButton.addEventListener("click",reset)
changeButton.addEventListener("click",swap)
