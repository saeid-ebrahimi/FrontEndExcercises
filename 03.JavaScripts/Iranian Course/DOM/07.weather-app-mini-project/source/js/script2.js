// version2 
const citiesData = [
    {city:"Tehran",temp:12,condition:"Windy",humidity:23,windSpeed:32},
    {city:"Tabriz",temp:5,condition:"Snowy",humidity:45,windSpeed:25},
    {city:"Shiraz",temp:20,condition:"Sunny",humidity:10,windSpeed:10},
    {city:"Mashad",temp:18,condition:"Rainy",humidity:40,windSpeed:22},
    {city:"Isfehan",temp:25,condition:"Sunny",humidity:15,windSpeed:30}
]
const $ = document
const searchBtn = $.getElementById("search")

searchBtn.addEventListener("click",() =>{
    const searchBar = $.querySelector(".search-bar")
    const searchValue = searchBar.value
    const cityData = citiesData.find(function(item){
        return item.city === searchValue
    })
})