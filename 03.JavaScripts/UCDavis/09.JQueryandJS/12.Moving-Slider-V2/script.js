
$(window).on("load",function (){
    "use strict"
    const imageCount = $("#slider ul li").length
    const imageWidth = $("#slider ul li img").first().width()
    const totalWidth = (imageCount * imageWidth)+"px"

    let leftPosition = 0
    let counter = 0

    $("#slider ul").css("width", totalWidth)
    let timer = setInterval(slider,2500)

    function slider(){
        counter++
        if (counter === imageCount){
            $("#slider ul").clone().appendTo("#slider")
            $("#slider ul").last().css("left",imageWidth+"px")

            leftPosition = `-${totalWidth}`

            $("#slider ul").last().animate({left:0},700,"easeInQuad")
            $("#slider ul").first().animate({left:leftPosition},700,"easeInQuad", function (){
                $("#slider ul").first().remove()
            })

            counter = 0
        }

        else{
            leftPosition = `-${counter * imageWidth}px`
            $("#slider ul").animate({left:leftPosition},700,"easeInQuad")

        }
    }
    document.getElementById("slider").addEventListener("mouseover",function (){
        clearInterval(timer)
    })
    document.getElementById("slider").addEventListener("mouseleave",function (){
        timer = setInterval(slider,2500)
    })
})