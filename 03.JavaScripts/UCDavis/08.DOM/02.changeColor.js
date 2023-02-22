let myHeader = document.querySelector("h1")

setInterval(function (){myHeader.style.color = getRandomColor()},500)


    function getRandomColor(){
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let cnt=0;cnt < 6 ; cnt++){
        let idx = Math.floor(Math.random()*16)
        color += letters[idx]
    }
    return color
}