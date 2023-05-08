
(function() {
    "use strict"
    $("#hidebox").click(function (){
        $("#box").hide()
    })
    $("#showbox").click(function (){
        $("#box").show()
    })
    $("#togglebox").click(function (){
        $("#box").toggle()
    })
    $("#slideupbox").click(function (){
        $("#box").slideUp()
    })
    $("#slidedownbox").click(function (){
        $("#box").slideDown()
    })
    $("#slidetogglebox").click(function (){
        $("#box").slideToggle()
    })
    $("#fadeoutbox").click(function() {
        $("#box").fadeOut(3000, "swing")
    })
    $("#fadeinbox").click(function (){
        $("#box").fadeIn(4000, "linear")
    })
    $("#fadeto20box").click(function(){
        $("#box").fadeTo(4000, .2,"linear")
    })
    $("#fadeto100box").click(function (){
        $("#box").fadeTo(3000, 1, "swing")
    })
    $("#growbox").click(function(){
        $("#box").animate({width:"50%"}, 1000)
    }).dblclick(function (){
        $("#box").animate({width: "20%"}, 1000)
    })

    $("#growtext").click(function(){
        $("#box").animate({fontSize:"2rem",height:"80vh"}, 2000)
    }).dblclick(function (){
        $("#box").animate({fontSize: ".5rem",height:"30vh"}, 2000)
    })

    $("#movebox").click(function (){
        $("#box").animate({marginLeft:"+=300px"}, 2000)
    }).dblclick(function(){
        $("#box").animate({marginLeft:"-=300px"}, 2000)})

    $("#doall").click(function (){
        $("#box").animate({width:"50%",marginLeft:"+=300px", fontSize:"2rem"},4000)})

    $("#sequence").click(function (){
        $("#box").animate({width:"50%"},1000, function (){
            $("#box").animate({fontSize:"2rem"}, 1000,function (){
                $("#box").animate({marginLeft:"+=300px"},1000)
            })
        })
    })
})()