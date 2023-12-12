const input = document.getElementById("link-input")
const linkForm = document.getElementById("link-form")
const errMsg = document.getElementById("error-msg")

linkForm.addEventListener("submit", formSubmit)

function validURL(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}

function formSubmit(evt) {
    evt.preventDefault()
    const enteredValue = input.value.trim()
    if (enteredValue === ""){
        errMsg.innerHTML = "Please enter something"
        input.classList.add("border-red")
    }else if (!validURL(enteredValue)){
        errMsg.innerHTML = "Please enter valid url"
        input.classList.add("border-red")
    }else{
        errMsg.innerHTML = ""
        input.classList.remove("border-red")
    }
}
const btn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("menu")
btn.addEventListener("click", navToggler)
function navToggler (evt){
    evt.preventDefault()
    btn.classList.toggle("open")
    mobileMenu.classList.toggle("hidden")

}
