const templateElem = document.createElement("template")
templateElem.innerHTML = `
 <link rel="stylesheet" href="components/Course/course.css" >
 <div class="course-card">
      <div class="cover">
        <img>
      </div>
      <div class="details">
        <h2></h2>
        <div class="info">
          <p>Students: <slot name="students"></slot> </p>
          <p>Teacher: <slot name="teacher"></slot></p>
        </div>
        <div class="actions">
          <button id="register">Register</button>
          <button id="toggle-btn">Show Details</button>
        </div>
      </div>
    </div>`

class Course extends HTMLElement{
    constructor() {
        super();
        this.toggleInformation = false
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(templateElem.content.cloneNode(true))
    }
    register(course){
        alert(`You register in course ${course}`)
    }
    toggleInfo = ()=>{
        this.toggleInformation = !this.toggleInformation
        this.shadowRoot.querySelector(".info").style.display = this.toggleInformation ? "block":'none'
        this.shadowRoot.querySelector("#toggle-btn").innerHTML = this.toggleInformation ? "Hide Details":'Show Details'
    }
    connectedCallback(){
        this.shadowRoot.querySelector("h2").innerHTML = this.getAttribute("title")
        let imageElem = this.shadowRoot.querySelector("img")
        imageElem.setAttribute("src", this.getAttribute("cover"))
        imageElem.setAttribute("title", this.getAttribute("cover"))
        imageElem.setAttribute("alt", this.getAttribute("cover"))

        this.shadowRoot.querySelector("#register").addEventListener("click", () => {
            this.register(this.getAttribute("title"))
        })
        this.shadowRoot.querySelector("#toggle-btn").addEventListener("click", () => {
            this.toggleInfo()
        })
    }

    static observedAttributes(){
        return ["title", "cover"]
    }
}

export {Course}