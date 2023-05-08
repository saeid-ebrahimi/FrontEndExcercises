const $ = document
const noteInput = $.querySelector("#input-field")
const colors = $.querySelectorAll(".color-box")
const saveBtn = $.querySelector("#btn-save")
const delBtn = $.querySelector("#btn-delete")
const cardContainer = $.querySelector("#listed")

noteInput.addEventListener("keydown",function(evt){
    if(evt.key=== "Enter" && noteInput.value.trim()){
        addNote()
    }
})

colors.forEach(function(color){
    color.addEventListener("click",function(){
        noteInput.style.backgroundColor = color.style.backgroundColor
    })
})
saveBtn.addEventListener("click",function(){
    if(noteInput.value.trim())
        addNote()
})
delBtn.addEventListener("click",function(){
    noteInput.value = ""
    noteInput.style.backgroundColor = "#fff"
})
function addNote(){
    const card = $.createElement("div")
    card.className = "card shadow-sm rounded"
    card.style.backgroundColor = noteInput.style.backgroundColor
    
    const cardText = $.createElement("p")
    cardText.classList.add("card-text","p-3")
    cardText.innerText = noteInput.value
    
    card.appendChild(cardText)
    
    cardContainer.appendChild(card)
    
    noteInput.value = ""
    noteInput.style.backgroundColor = "#fff"
    card.addEventListener("click",function(event){
        event.target.parentElement.remove()
    })
}