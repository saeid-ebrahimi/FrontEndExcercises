(function (){
    "use strict"
    const images = ["./slides/image1.jpg",
        "./slides/image2.jpg",
        "./slides/image3.jpg",
        "./slides/image4.jpg",
        "./slides/image5.jpg"]
    let currentImage = 0
    const next = document.querySelector("#next")
    const previous = document.querySelector("#previous")
    const slider= document.querySelector(".slider")

    next.onclick = nextSlide
    previous.onclick = previousSlide
    function nextSlide (){
        if(++currentImage > images.length-1){
            currentImage = 0
        }
        swapImage()
    }
    function previousSlide(){
        if(--currentImage < 0){
            currentImage = images.length-1
        }
        swapImage()
    }

    function swapImage(){
        const newSlide = document.createElement("img")
        newSlide.src = images[currentImage]
        newSlide.className = "fadein-img"
        slider.appendChild(newSlide)
        if(slider.children.length > 3){
            slider.removeChild(slider.children[slider.children.length -2])
        }
    }
})()