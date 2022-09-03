(function (){
    "use strict"
    const re_name = /^[a-zA-Z]+(([\'\- ][a-zA-Z])?[a-zA-Z]*)*$/;
    const re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const re_url = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    let counter = 0;

    $("#myForm").submit(function(event){
        const name = $("#name").val()
        const email = $("#email").val()
        const url = $("#url").val()
        const comment = $("#comment").val()

        $("#myForm span").css("color","red")

        if(!re_name.test(name)){
            $("#name-err").html("Please enter a valid name")
            counter++
        }
        if(!re_email.test(email)){
            $("#email-err").html("Please enter a valid email")
            counter++
        }
        if(!re_url.test(url) && url===""){
            $("#url-err").html("Please enter a valid URL")
            counter++
        }
        if(comment===""){
            $("#comments-err").html("Please give me a comment!")
            counter++
        }
        if (counter>0){ event.preventDefault()}
    })
})()