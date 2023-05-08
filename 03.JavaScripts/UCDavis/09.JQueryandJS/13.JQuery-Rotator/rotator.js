(function(){
	"use strict";
	let counter = 1
	function contentRotator(){
		$(`#container p:nth-child(${counter})`).fadeIn(2000, function (){
			if ($(this).is("#container p:last-child")){
				setTimeout(function (){
					$(`#container p:nth-child(${counter})`).fadeOut(2000,function (){
						counter = 1
						contentRotator()
					})
				}, 7000)
			}
			else{
				setTimeout(function (){
					$(`#container p:nth-child(${counter})`).fadeOut(2000,function (){
						counter++
						contentRotator()
					})
				}, 7000)
			}
		})
	}
	contentRotator()

}());
