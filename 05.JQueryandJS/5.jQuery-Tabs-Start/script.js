(function(){
    "use strict"
	$("#tabs > ul > li > a").click(function (event){
			event.preventDefault()
			$("#tabs > ul > li > a").css({backgroundColor: "#a2a2a2",color: "#cccccc"})
			$(this).css({color: "#030303",backgroundColor: "#eaeaea"})
			const thisTab = $(this).attr("href")
			$("#tabs > div:visible").fadeOut("fast", function (){
				$(thisTab).fadeIn("fast")
			})
		})
})()