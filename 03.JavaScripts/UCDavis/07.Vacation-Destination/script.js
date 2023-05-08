(function(){
    "use strict"
    const detailsForm = document.querySelector("#destination-details-form")
    detailsForm.addEventListener("submit", handleFormSubmit)

    function handleFormSubmit(event){
        event.preventDefault()
        const destName = event.target.elements["name"].value
        const destLocation = event.target.elements["location"].value
        const destPhotoURL = event.target.elements["photo"].value
        const destDescription = event.target.elements["description"].value
        const destCard = createDestinitionCard(destName, destLocation, destPhotoURL, destDescription)

        for (let elem of detailsForm.elements){
            elem.value = ""
        }
        const wishListContainer = document.getElementById("destination-container")
        if(wishListContainer.children.length === 0){
            document.getElementById("title").innerText = "My Wishlist is Empty"
        }
        wishListContainer.appendChild(destCard)

        function createDestinitionCard(name, location, photoURL, description){
            const card = document.createElement("div")
            card.classList.add("card")

            const cardImage = document.createElement("img")
            cardImage.setAttribute("alt", name)
            if (destPhotoURL.length === 0){
                cardImage.setAttribute("src","../img/city.jpg")
            }else{
                cardImage.setAttribute("src", photoURL)
            }

            const cardDetail = document.createElement("div")
            cardDetail.classList.add("card-detail")

            const cardTitle = document.createElement("h3")
            cardTitle.innerText = name

            const cardLocation = document.createElement("h4")
            cardLocation.innerText = location

            const removeBtn = document.createElement("button")
            removeBtn.innerText = "Remove"
            removeBtn.addEventListener("click", removeDest)

            if(description.length !== 0){
                const cardDescription = document.createElement("p")
                cardDescription.classList.add("card-text")
                cardDescription.innerText = description
                cardDetail.append(cardTitle, cardLocation, cardDescription, removeBtn)
            }else{
                cardDetail.append(cardTitle, cardLocation,removeBtn)
            }

            card.append(cardImage, cardDetail)
            function removeDest(event){
                const card = event.target.parentElement.parentElement
                card.remove()
            }
            return card
        }

    }

})()