// const colorsArr = ["red","green","blue","orange","solver","aliceblue","navy","wheat","magenta","cyan","pink","purple"] 

// setInterval(function(){
//     const randomIndex = Math.floor(Math.random()* colorsArr.length)
//     document.body.style.backgroundColor = colorsArr[randomIndex]
// },1000)


/////////////////// another way //////////////////////
let red 
let green
let blue

setInterval(function(){
    red = Math.floor(Math.random() * 256)
    green = Math.floor(Math.random() * 256)
    blue = Math.floor(Math.random() * 256)
    document.body.style.background = `rgb(${red},${green},${red})`
},1000)