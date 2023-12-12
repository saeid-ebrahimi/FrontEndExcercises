const btn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("menu")
btn.addEventListener("click", navToggler)
function navToggler (evt){
    evt.preventDefault()
    btn.classList.toggle("open")
    mobileMenu.classList.toggle("hidden")

}
