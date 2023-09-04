
const menuElem = document.querySelector(".menu")
const menuBtn = document.querySelector(".header__icon")
const menuBtnIcon = document.querySelector(".header__icon i")
let isOpen = false
menuBtn.addEventListener("click", function (eve){
    if (!isOpen){
        menuElem.style.left = "0"
        menuBtnIcon.classList.add("fa-times")
        menuBtnIcon.classList.remove("fa-bars")
        isOpen= true
    }else{
        menuElem.style.left = "-14rem"
        menuBtnIcon.classList.add("fa-bars")
        menuBtnIcon.classList.remove("fa-times")
        isOpen= false
    }
})