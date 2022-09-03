window.addEventListener("load",function(){
    const slideCount = document.querySelectorAll("#slider-wrapper ul li").length
    const slideWidth = document.querySelector("#slider-wrapper").offsetWidth
    const totalWidth = slideCount * slideWidth + "px"

    const slider = document.querySelector("#slider-wrapper ul")

    let leftPosition = 0
    let counter = 0
    slider.style.width = totalWidth
    let timer = setInterval(slide, 2500)
    slider.addEventListener("mouseover",function (){
        clearInterval(timer)
    })
    slider.addEventListener("mouseout",function (){
        timer = setInterval(slide, 2500)
    })
    function slide() {
        counter++
        if (counter === slideCount)
            counter = 0
        leftPosition = `-${counter * slideWidth}px`
        slider.style.left = leftPosition
    }

})