
(function() {
    "use strict"
    const imageCount = $(".slider ul li").length
    const imageWidth = $(".slider ul li img").first().width()
    const totalWidth = (imageCount*imageWidth)+"px"

    let leftPos = 0
    let counter = 0
    const slider = $(".slider ul")
    slider.css("width", totalWidth)
    $("#next").click(function(){
        counter++
        if(counter === (imageCount)){
            counter = 0
        }
        leftPos = `-${counter * imageWidth}px`
        slider.animate({left:leftPos}, 500, "easeInQuad")
    })
    $("#previous").click(function (){
        counter--
        if(counter === -1){
            counter = imageCount -1
        }
        leftPos = `-${counter * imageWidth}px`
        slider.animate({left:leftPos}, 500, "easeInQuad")
    })
})()