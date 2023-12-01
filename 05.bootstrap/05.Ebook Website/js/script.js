// Add custom JavaScript here
function userScroll(){
    const navBar = document.querySelector(".navbar")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100){
            navBar.classList.add("bg-dark")
            navBar.classList.add('navbar-sticky')
        }else{
            navBar.classList.remove("bg-dark")
            navBar.classList.remove('navbar-sticky')
        }
    })
}

document.addEventListener("DOMContentLoaded", userScroll)