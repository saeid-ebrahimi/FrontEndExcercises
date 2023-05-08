
$("nav ul li a").click(function(){
    const thisSection = $(this).attr("href")
    const thisLink = $(this)
    $("html , body").stop().animate({scrollTop: $(thisSection).offset().top - 200},500, "easeOutQuad",function (){
        $("nav ul li a").removeClass("selected")
        thisLink.addClass("selected")
    })
    return false
})

$(window).on("load", function (){
    const posts = $("section")
    let pageTop

    let counter = 0
    let prevCounter = 0
    let doneResizing
    let postTops = []
    const links = $("nav ul li a")
    resetPagePosition()
    //console.log(postTops)
    $(window).scroll(function (){
        pageTop = $(window).scrollTop() + postTops[0] + 10

        if(pageTop > postTops[counter + 1]){
            counter++
        }
        else if( counter > 0 && pageTop < postTops[counter]){
            counter--
        }
        if (counter !== prevCounter){
            links.removeClass("selected")
            links.eq(counter).addClass("selected")
            prevCounter = counter
        }
        $(window).on("resizing",function (){
            clearTimeout(doneResizing)
            doneResizing =  setTimeout(function(){
                resetPagePosition()
            },500)

        })
    })
    function resetPagePosition() {

        postTops = []
        posts.each(function () {
            postTops.push(Math.floor($(this).offset().top))
        })
        let pagePosition = $(window).scrollTop + 210
        counter = 0
        for (let i = 0; i < postTops.length; i++) {
            if (pagePosition > postTops[i]) {
                counter++
            }
        }


        if (counter > 0)
            counter--
        console.log(counter)
        $(links).removeClass("selected")
        $(links).eq(counter).addClass("selected")
    }

})