(function(){
    "use strict"
    const images = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"]
    let current = 0
    const next = document.querySelector("#next")
    const previous = document.querySelector("#previous")
    const image = document.querySelector("img")
    next.onclick = nextFunc
    previous.onclick = previousFunc
    function nextFunc(){
        current++
        if (current > images.length -1)
            current = 0
        image.src = images[current]
    }
    function previousFunc(){
        current--
        if (current < 0)
            current = images.length -1
        image.src = images[current]
    }
})()