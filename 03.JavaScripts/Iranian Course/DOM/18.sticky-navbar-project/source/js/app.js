const $ = document
const mainNav = $.getElementById("mainNav")
const logo = $.querySelector(".logo a img")
const upward = $.querySelector("#upward-icon")
document.addEventListener("scroll",function(event){
    if(scrollY> 50){
        mainNav.classList.add("bg-blue","txt-white")
        logo.style.height = "60px"
    }else if (scrollY <= 50){
       logo.style.height = "80px" 
       mainNav.classList.remove("bg-blue","txt-white")
    }
})
upward.addEventListener("click", function (event){
    console.log("clicked")
    if(scrollY > 200){
        window.scrollTo(0,10)
    }
})