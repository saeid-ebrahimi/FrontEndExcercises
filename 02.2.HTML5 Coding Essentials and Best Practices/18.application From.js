const thumbnailsDiv = document.getElementById("thumbnails")
const photoElem =  document.getElementById("photo")
const fNameElem =  document.getElementById("fname")
const lNameElem =  document.getElementById("lname")
const emailElem =  document.getElementById("email")
const phoneElem =  document.getElementById("phone")
const positionElem =  document.getElementById("position")
const bDateElem = document.getElementById("bdate")
const startDateElem =  document.getElementById("startDate")
const workStatusElems =  document.getElementsByClassName("status")
const exprienceElem =  document.getElementById("exprience")
const interviewDateElem =  document.getElementById("interview")
const genderSelectElem =  document.getElementById("gender")
const linkElem =  document.getElementById("link")
const FavcolorElem =document.getElementById("favColor")
const hubyElem =  document.getElementById("huby")
const levelElem =  document.getElementById("level")
const coverElem =  document.getElementById("cover")
const resumeElem =  document.getElementById("resume")
const contactElems =  document.getElementsByClassName("contact")
const saveBtn = document.getElementById("save")
const submitElem = document.getElementById("submit")

FavcolorElem.addEventListener("change",()=>{
    let color  = FavcolorElem.value
    FavcolorElem.style.backgroundColor = color
} , false) 

bDateElem.addEventListener("change", () =>{
    if (bDateElem.valueAsDate > new Date()){
        bDateElem.classList.remove("valid")
        bDateElem.classList.add("invalid")
        bDateElem.setCustomValidity("you havn't burn")
    }
    else{
        bDateElem.classList.remove("invalid")
        bDateElem.classList.add("valid")
        bDateElem.setCustomValidity("")
    }
}, false)

saveBtn.addEventListener("click",saveData,false)
const selectors = ["photo","fname", "lname", "email","phone", "position",
 "bdate", "startDate", "status" ,"exprience","interview","gender",
"link", "favColor", "huby", "level", "cover", "resume", "contact"]
function saveData(evt){
    evt.preventDefault()
    
    console.log("store data")
    localStorage.clear()
    photos = []
    for(let file of photoElem.files){
        photos.push(file)
    }
    localStorage.photo = photos
    localStorage.fname = fNameElem.value
    localStorage.lname = lNameElem.value
    localStorage.email = emailElem.value
    localStorage.phone = phoneElem.value
    localStorage.position = positionElem.value
    localStorage.bdate = bDateElem.value
    localStorage.startDate= startDateElem.value
    let status = null
    for(let element of workStatusElems){
        if (element.checked){
            status = element
        }
    }
    localStorage.status = status.value
    localStorage.exprience = exprienceElem.value
    localStorage.interview = interviewDateElem.value
    localStorage.gender =genderSelectElem.value
    localStorage.link = linkElem.value
    localStorage.favColor = FavcolorElem.value
    localStorage.huby = hubyElem.value
    localStorage.level = levelElem.value
    localStorage.cover = coverElem.value
    localStorage.resume = resumeElem.value
    let contactForms = []
    for (let elem of contactElems){
        if (elem.checked)
            contactForms.push(elem.value)
    }
    localStorage.contact = contactForms

    for(let prop in localStorage){
        localStorage[prop] = localStorage[prop]
    }
}
window.onload = function restoreData(){
    for(let field of selectors){
        console.log(field)
        if (field === "photo" ){
            phoneElem.files = localStorage[field]
        }else if(field === "status"){
            document.getElementById(localStorage[field]).checked = true
        }
        else if(field === "contact"){
            continue
        }else if (field === "resume")
        {
            continue
        }else if (field === "length"){
            continue
        }
        else{
            document.getElementById(field).value = localStorage[field]

        }
    }
}
photoElem.addEventListener("change",readImagesAndPreview,false)
function readImagesAndPreview(evt){
    let files = evt.target.files
    for (let file of files){
        let reader = new FileReader()
        reader.onload = function(evt){
            let container = document.createElement("div")
            let image = document.createElement("img")
            image.src = evt.target.result
            image.width = 100
            let namePar = document.createElement("p")
            namePar.innerText = file.name
            let sizePar = document.createElement("p")
            sizePar.innerText = parseInt(file.size / 100) + "KB"
            container.appendChild(image)
            container.appendChild(namePar)
            container.appendChild(sizePar)
            container.style.display = "inline-block"
            thumbnailsDiv.appendChild(container)
        }
    
        reader.readAsDataURL(file)
        
    }
}
