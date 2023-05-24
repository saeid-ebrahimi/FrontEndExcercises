const divElems = document.querySelectorAll("div")

divElems.forEach((div, idx) => {
    div.addEventListener("click", function (event){
        console.log("div"+(idx+1))
        event.stopPropagation()
        div.style.backgroundColor = "darkblue"
        div.color = "white"

    }, )
})