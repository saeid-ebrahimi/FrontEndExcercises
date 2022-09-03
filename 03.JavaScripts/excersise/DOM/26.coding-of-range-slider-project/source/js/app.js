const rangeInput = document.querySelector('input')
const container = document.querySelector(".container")

rangeInput.addEventListener("change",function(event){
    container.style.filter = `brightness(${event.target.value}%)`                                    
})   