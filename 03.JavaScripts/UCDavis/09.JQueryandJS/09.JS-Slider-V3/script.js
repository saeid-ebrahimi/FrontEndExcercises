window.addEventListener("load", function (){
    const slides = document.querySelectorAll("#slider-wrapper ul li")
    const slidesCount = slides.length
    const slideWidth = document.querySelector("#slider-wrapper").offsetWidth
    const totalWidth = slidesCount * slideWidth+"px"

    const slider = document.querySelector("#slider-wrapper ul")
    const next = document.querySelector("#next")
    const previous = document.querySelector("#previous")

    const images = ["./images/leaves01.jpg",
        "./images/leaves02.jpg",
        "./images/leaves03.jpg",
        "./images/leaves04.jpg",
        "./images/leaves05.jpg"]

    let leftPos = 0
    let counter = 0
    for (let i = 0 ; i < images.length; i++){
        slides[i].style.backgroundImage = `url(${images[i]})`
    }

    slider.style.width = totalWidth
    next.addEventListener("click",function (event){
        event.preventDefault()
        nextSlide()
    })
    let timer = setInterval( nextSlide, 1000)
    slider.addEventListener("mouseout", function (){
        timer = setInterval( nextSlide, 1000)
    })
    slider.addEventListener("mouseover", function (){
        clearInterval(timer)
    })
    previous.addEventListener("click", function (event){
        event.preventDefault()
        counter--
        if(counter < 0)
            counter = slidesCount - 1
        leftPos = `-${counter * slideWidth}px`
        slider.style.left = leftPos
    })
    function nextSlide(){
        counter++
        if(counter === slidesCount)
            counter = 0
        leftPos = `-${counter*slideWidth}px`
        slider.style.left = leftPos
        console.log(leftPos)
    }
})