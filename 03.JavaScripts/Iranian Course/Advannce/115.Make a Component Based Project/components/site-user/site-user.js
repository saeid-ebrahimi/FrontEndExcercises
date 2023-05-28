const template = document.createElement("template")

template.innerHTML = `
    <link rel="stylesheet" href="components/site-user/site-user.css">
    <h2>Designed by Saeid</h2> 
    <hr> `
class SiteUser extends HTMLElement{
    constructor() {
        super()
        //console.log("custom element created!", this)
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {SiteUser}