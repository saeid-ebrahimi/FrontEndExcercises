class SiteUser extends HTMLElement{
    constructor() {
        super()
        console.log("custom element created!", this)
        this.innerHTML = `
                        <style> h2{color:green;}</style>
                        <h2>Designed by Saeid</h2> 
                        <hr> `
    }
}

window.customElements.define("site-user",SiteUser)