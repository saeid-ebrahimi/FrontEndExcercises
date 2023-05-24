
const template = document.createElement("template")
// template.innerHTML = `<style> h2{color:green;}</style>
//                         <h2>Designed by Saeid</h2>
//                         <hr> `

template.innerHTML = `<link rel="stylesheet" href="css/site-user.css">
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

window.customElements.define("site-user",SiteUser)