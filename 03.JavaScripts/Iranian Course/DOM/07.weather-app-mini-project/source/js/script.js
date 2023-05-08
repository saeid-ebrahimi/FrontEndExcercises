// version 1
const citiesData = {
    tehran:{city:"Tehran",temp:12,condition:"Windy",humidity:23,windSpeed:32},
    tabriz:{city:"Tabriz",temp:5,condition:"Snowy",humidity:45,windSpeed:25},
    shiraz:{city:"Shiraz",temp:20,condition:"Sunny",humidity:10,windSpeed:10},
    mashad:{city:"Mashad",temp:18,condition:"Rainy",humidity:40,windSpeed:22},
    isfehan:{city:"Isfehan",temp:25,condition:"Sunny",humidity:15,windSpeed:30}
}
const $ = document
const searchBtn = $.getElementById("search")

searchBtn.addEventListener("click",() =>{
    const searchBar = $.querySelector(".search-bar")
    const searchValue = searchBar.value
    const cityData = citiesData[searchValue] 

    if (cityData){
        $.querySelector(".city").innerHTML = "Weather in " + cityData.city
        $.querySelector(".temp").innerHTML = cityData.temp + "&deg;C"
        $.querySelector(".description").innerHTML = cityData.condition
        $.querySelector(".humidity").innerHTML = "Humidity: "+cityData.humidity
        $.querySelector(".wind").innerHTML = "Wind speed: " + cityData.windSpeed + "Km/H"
        $.querySelector(".weather").classList.remove("loading")
    }else{
        $.querySelector(".city").innerHTML = "Cannot Find City"
        $.querySelector(".temp").innerHTML = "&deg;C"
        $.querySelector(".description").innerHTML = ""
        $.querySelector(".humidity").innerHTML = "Humidity: "
        $.querySelector(".wind").innerHTML = "Wind speed: " + "Km/H"
        $.querySelector(".weather").classList.remove("loading")
    }
   
})