(function (){
			"use strict"
			//$("ul li ul").css("display","none")
			$("ul li ul").hide()
			$(".menulink").click(function (){
				const thisMenu = $(this).next("ul")
				$("ul li ul").not(thisMenu).hide()
				/*
				if(thisMenu.is(":visible"))
					thisMenu.hide()
				else
					thisMenu.show()

				 */
				thisMenu.toggle()
			})
})()