(function (){
   "use strict"
const detailsForm = document.querySelector("#destination_details_form")
detailsForm.addEventListener("submit",handleFormSubmit)

function handleFormSubmit(event){
    event.preventDefault()

    const destName = event.target.elements["name"].value
    const destLocation = event.target.elements["location"].value
    const destPhoto = event.target.elements["photo"].value
    const destDescription = event.target.elements["description"].value
    const destCard = createDestinationCard(destName,destLocation,destPhoto,destDescription)

    for(let i=0; i< detailsForm.length; i++){
        detailsForm.elements[i].value = ""
    }

    const wishListContainer = document.getElementById("destination_container")
    if (wishListContainer.children.length === 0 ){
        document.getElementById("title").innerHTML = "My Wish List"
    }
    wishListContainer.appendChild(destCard)

    function createDestinationCard(name,location, photoUrl, description){
        const card = document.createElement("div")
        card.className = "card"

        const image = document.createElement("img")
        image.setAttribute("alt",name)
        const defaultPhotoUrl = "./images/signpost.jpg"
        if (photoUrl.length === 0){
            image.src = defaultPhotoUrl
        }
        else{
            image.src = photoUrl
        }
        card.appendChild(image)
        const cardBody = document.createElement("div")
        cardBody.className = "card_body"

        const cardTitle = document.createElement("h3")
        cardTitle.innerText = name
        cardBody.appendChild(cardTitle)

        const cardLocation = document.createElement("h4")
        cardLocation.innerText = location
        cardBody.appendChild(cardLocation)

        if (description.length !== 0){
            const cardDescription = document.createElement("p")
            cardDescription.className = "card_text"
            cardDescription.innerText = description
            cardBody.appendChild(cardDescription)
        }
        const removeBtn = document.createElement("button")
        removeBtn.innerText = "Remove"
        removeBtn.addEventListener("click",removeDest)
        cardBody.appendChild(removeBtn)


        card.appendChild(cardBody)
        function removeDest(event){
            const card = event.target.parentElement.parentElement
            card.remove()
        }
        return card
    }
}
})()
