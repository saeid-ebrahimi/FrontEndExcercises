(function()
{
    "use strict"
    const submenus = document.querySelectorAll("ul li ul")

    hideSubMenu(submenus)

    const menuLinks = document.querySelectorAll(".menulink")

    for (let i = 0; i < menuLinks.length; i++) {

        menuLinks[i].addEventListener("click", function (event) {

            event.preventDefault()
            const thisMenu = this.parentNode.querySelector("ul")
            if (thisMenu.classList.contains("hide-menu")) {
                hideSubMenu(submenus)
                thisMenu.className = "show-menu"
            } else
                thisMenu.className = "hide-menu"
        })
    }

    function hideSubMenu(subMenus) {
        for (const menu of subMenus) {
            menu.className = "hide-menu"
        }
    }
})()