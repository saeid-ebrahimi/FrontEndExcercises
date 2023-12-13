const tabs = document.querySelectorAll(".tab")
const panels = document.querySelectorAll(".panel")
const btn = document.getElementById("menu-btn")
const menu= document.getElementById("menu")
const logo = document.getElementById("logo")

// Tabs menu event listener

tabs.forEach((tab) => tab.addEventListener("click", onTabClick))
// Hamburger button listener
btn.addEventListener("click", navToggler)

function onTabClick(evt){
    tabs.forEach((tab)=>{
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })
    panels.forEach((panel) => panel.classList.add('hidden'))
    evt.target.classList.add('border-softRed', 'border-b-4')
    const classString = evt.target.getAttribute('data-target')
    document.getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}
function navToggler(){
    btn.classList.toggle("open")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
    if (menu.classList.contains("flex")){
        logo.setAttribute("src", "./images/logo-bookmark-footer.svg")
    }else{
        logo.setAttribute("src", "./images/logo-bookmark.svg")
    }


}
