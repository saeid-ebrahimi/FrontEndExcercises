(function (){
    "use strict"
    document.getElementById("myform").onsubmit = validateForm()

    function validateForm(){
        const nameReg = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/
        const emailReg = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/
        const URLReg = /^(http|https|ftp):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?\/?([a-zA-Z0-9\-\._\?\,\'/\\\+&amp;%\$#\=~])*$/
        document.getElementById("name-err").innerHTML = ""
        document.getElementById("email-err").innerHTML = ""
        document.getElementById("url-err").innerHTML = ""
        document.getElementById("comments-err").innerHTML = ""
        let counter = 0

        const name = document.getElementById("name")
        const email = document.getElementById("email")
        const url = document.getElementById("url")
        const comment = document.getElementById("comment")

        if (! nameReg.test(name.value)){
            fixForm(name,"Please Provide a Proper Name!")
            counter++
        }
        if (!emailReg.test(email.value)){
            fixForm(email,"Please Provide a Proper Email!")
            counter++
        }
        if (!URLReg.test(url.value) && url.value){
            fixForm(url,"Please type a valid URL in the form of 'http://example.com'")
            counter++
        }
        if (comment.value === ""){
            fixForm(comment, "Please provide some comments")
        }

        if(counter > 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    function fixForm(field,message){
        const errorID = filed.id + "-err"
        const errorField = document.getElementById(errorID)
        errorField.innerHTML = message
        errorField.style.color = "red"
        document.getElementById(field.id).focus()
    }
})()