const divElems = document.querySelectorAll("div")

divElems.forEach((div, idx) => {
    div.addEventListener("click", function (event){
        console.log("div"+(idx+1))
        div.style.backgroundColor = "darkblue"
        div.color = "white"
        // to prevent capturing as a config
        // event.target.style.backgroundColor = "darkblue"
        // event.target.style.color = "white"

    }, {capture:true})
})