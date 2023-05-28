const template = document.createElement("template")

template.innerHTML = `
    <link rel="stylesheet" href="components/header/header.css">
    <div class="header">
        <h2>This is a new Header</h2>
    </div>`
class Header extends HTMLElement{
    constructor() {
        super()
        //console.log("custom element created!", this)
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {Header}