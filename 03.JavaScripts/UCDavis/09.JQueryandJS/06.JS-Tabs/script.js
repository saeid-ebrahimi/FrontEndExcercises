(function (){

    "use strict"
    const tabs = document.querySelectorAll("#tabs > ul> li > a")
    /*
    for (let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click", selectTab)
    }
    */

    tabs.forEach(function (tab){
        tab.addEventListener("click",selectTab)
    })
    function selectTab(event){
        event.preventDefault()
        /*
        for (let i = 0; i < tabs.length; i++){
            tabs[i].removeAttribute("class")
        }

         */
        tabs.forEach( tab => {
            tab.removeAttribute("class")
        })
        event.target.className = "active"
        const thisTab = event.target.getAttribute("href")
        const thisContent = document.querySelector(thisTab)

        const oldContent = document.querySelector(".visible")
        oldContent.className = "visuallyhidden"
        oldContent.addEventListener("transitionend",function(){
            oldContent.className = "hidden"
            thisContent.className = "visible visuallyhidden"
            setTimeout(function (){
                thisContent.classList.remove("visuallyhidden")
            }, 20)
        }, {capture:false, once:true, passive:false})
    }

})()