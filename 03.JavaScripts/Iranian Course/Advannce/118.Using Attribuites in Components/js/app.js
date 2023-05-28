const template = document.createElement("template")
template.innerHTML =`
    <link rel="stylesheet" href="css/site-user.css">
    <hr>
    <h2></h2>
    <span></span>
    <br>
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
        let userNameH2 = this.shadowRoot.querySelector("h2")
        let userJobSpan = this.shadowRoot.querySelector("span")

        console.log("component added to DOM")
        console.log(this.getAttribute('user-title'))

        userNameH2.innerHTML = this.getAttribute('user-title')
        userJobSpan.innerHTML = this.getAttribute("user-job")
        removeBtn.addEventListener("click", () => {
            this.removeUser(this)
        })

    }

    disconnectedCallback() {
        console.log("component removed from DOM")
        // remove handlers such as remove component data from local storage
        let removeBtn = this.shadowRoot.querySelector("button")
        removeBtn.removeEventListener("click", () =>{
            this.removeUser(this)
        })
    }
    static observedAttributes() {
        return ['user-title', "user-job"]
    }
}

window.customElements.define("site-user",SiteUser)