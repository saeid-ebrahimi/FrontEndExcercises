$(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
            $(".carousel").carousel({interval:2000});
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children('span').hasClass("fa-pause")) {
                    $("#carouselButton").children("span").removeClass("fa-pause")
                    $("#carouselButton").children("span").addClass("fa-play")
                    $("#mycarousel").carousel("pause");
                } else if ($("#carouselButton").children('span').hasClass("fa-play")) {
                    $("#carouselButton").children("span").removeClass("fa-play")
                    $("#carouselButton").children("span").addClass("fa-pause")
                    $("#mycarousel").carousel("cycle");
                }
            });
            $("#login").click(function(evt){
                evt.preventDefault();
                $("#loginModal").modal("toggle");
            });
            $("#reserve").click(function(evt){
                evt.preventDefault();
                $("#reserveModal").modal("toggle");
            })

        });