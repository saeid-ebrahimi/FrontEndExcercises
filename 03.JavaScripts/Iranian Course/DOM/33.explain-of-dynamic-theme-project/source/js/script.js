const buttons = document.querySelectorAll(".btn")

let themeColor = "#ff1756"
buttons.forEach(function(btn){
    btn.addEventListener("click",function(event){
        themeColor = event.target.dataset.color
        document.documentElement.style.setProperty("--theme-color",themeColor)
    })
})
