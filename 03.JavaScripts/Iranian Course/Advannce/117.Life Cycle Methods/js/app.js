
const template = document.createElement("template")
// template.innerHTML = `<style> h2{color:green;}</style>
//                         <h2>Designed by Saeid</h2>
//                         <hr> `

template.innerHTML = `
    <link rel="stylesheet" href="css/site-user.css">
    <hr>
    <slot name="job"></slot>
    <slot name="username"></slot>
    <button>Remove</button> 
    <hr>`
class SiteUser extends HTMLElement{
    constructor() {
        super()
        //console.log("custom element created!", this)
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    removeUser(elem) {
        elem.remove()
    }
    connectedCallback(){
        // codes && event handling
        let removeBtn = this.shadowRoot.querySelector("button")
        removeBtn.addEventListener("click", () => {
            this.removeUser(this)
        })
        console.log("component added to DOM")
    }

    disconnectedCallback() {
        console.log("component removed from DOM")
        // remove handlers such as remove component data from local storage
        let removeBtn = this.shadowRoot.querySelector("button")
        removeBtn.removeEventListener("click", () =>{
            this.removeUser(this)
        })
    }
}

window.customElements.define("site-user",SiteUser)