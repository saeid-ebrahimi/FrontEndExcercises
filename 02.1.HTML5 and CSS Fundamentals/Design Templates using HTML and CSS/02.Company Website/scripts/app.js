// mobile nav menu interactions
const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-menu")
let navIsOpen = false;
navBtn.addEventListener("click", function (){
    if(navIsOpen){
        navBtn.classList.remove("nav__btn--open");
        navMenu.classList.remove("nav-menu--open")
        navIsOpen = false;
    }else{
        navBtn.classList.add("nav__btn--open");
        navMenu.classList.add("nav-menu--open")
        navIsOpen = true;
    }
})

