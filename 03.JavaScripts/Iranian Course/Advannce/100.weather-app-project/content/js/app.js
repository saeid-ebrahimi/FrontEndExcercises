const inputElem = document.querySelector(".search-box")
let apiData = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "ccf7776be60271514267830600845455",

}
function fetchData() {
    let cityValue = inputElem.value
    fetch(`${apiData.url}${cityValue}&&appid=${apiData.key}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            showData(data)
        })
}

function showData(data){
    let cityElem = document.querySelector(".city")
    cityElem.innerHTML = `${data.name}, ${data.sys.country}`
    let dateElem = document.querySelector(".date")
    dateElem.innerHTML = showDate(data)

    let tempElem = document.querySelector(".temp")
    tempElem.innerHTML = `${Math.round(data.main.temp - 273.15)}`
    tempElem.innerHTML += "<span>°c</span>"

    let weatherElem = document.querySelector(".weather")
    weatherElem.innerHTML = `${data.weather[0].main}`
    let tempsElem = document.querySelector(".hi-low")
    tempsElem.innerHTML = `${Math.round(data.main.temp_min - 273.15)}°c / ${Math.round(data.main.temp_max - 273.15)}°c`


}

function showDate(data){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let newDate = new Date()
    console.log(newDate)
    let weekDay = days[newDate.getDay()]
    let month = months[newDate.getMonth()]
    let hour = newDate.getHours()
    let minute = newDate.getMinutes()
    let miliseconds = ((hour*60 + minute)*60 + newDate.getTimezoneOffset())*1000

    let year = newDate.getFullYear()
    let day = newDate.getDate()
    if (miliseconds - data.timezone < 0){
        day--
        weekDay = days[newDate.getDay() -1]
    }

    return `${weekDay} ${day} ${month} ${year}`
}
inputElem.addEventListener("keypress", event => {
    if (event.keyCode == 13){
        fetchData()
    }
})




