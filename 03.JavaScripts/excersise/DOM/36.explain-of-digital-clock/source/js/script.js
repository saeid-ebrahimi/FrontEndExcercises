const hourElem  = document.getElementById("hour")
const minElem = document.getElementById("minute")
const secElem = document.getElementById("seconds")

setInterval(function(){
    const currentDate = new Date()
    let currentHour = currentDate.getHours()
    if(currentHour < 10){
        currentHour = "0" + currentHour
    }
    let currentMinute = currentDate.getMinutes()
    if(currentMinute < 10){
        currentMinute = "0" + currentMinute
    }
    let currentSecond = currentDate.getSeconds()
    if(currentSecond < 10){
        currentSecond = "0" + currentSecond
    }
    hourElem.innerText = currentHour
    minElem.innerText = currentMinute
    secElem.innerHTML = currentSecond
},1000)