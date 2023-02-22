const navLinks = document.querySelectorAll("nav ul li a")
navLinks.forEach(function (eachLink){
    eachLink.addEventListener("click", smoothScroll)
})

function smoothScroll(event){
    event.preventDefault()
    const targetID = event.target.getAttribute("href")
    const targetSection = document.querySelector(targetID)
    const originalTop = Math.floor(targetSection.getBoundingClientRect().top) - 200
    window.scrollBy({top: originalTop, left: 0, behavior: "smooth"})
}
window.addEventListener("load",function(){
    const posts = document.querySelectorAll("section")
    let postTops = []
    let counter = 1
    let prevCounter = 1
    let doneResizing
    //console.log(posts[0].getBoundingClientRect().top + window.pageYOffset)
    resetPagePosition()
    //console.log(postTops)
    window.addEventListener("scroll",function (){
        const pageTop = window.pageYOffset + 250
        if (pageTop > postTops[counter]){
            counter++
            //console.log("scrolling down!")
        }
        else if(pageTop < postTops[counter - 1] && counter > 1)
        {
            counter--
            //console.log("scrolling up!")
        }
        if (counter !== prevCounter){
            navLinks.forEach(function (link){
                link.removeAttribute("class")
            })
            const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`)
            thisLink.classList.add("selected")
            prevCounter = counter
        }
    })
    window.addEventListener("resize",function (){
        clearTimeout(doneResizing)
        doneResizing = setTimeout(function (){
            //console.log("done resizing")
            resetPagePosition()
        }, 500)
    })
    function resetPagePosition(){

        postTops = []
        posts.forEach(function (post){
            postTops.push(Math.floor(post.getBoundingClientRect().top + window.pageYOffset))
        })
        const pagePosition = window.pageYOffset + 250
        counter = 0
        postTops.forEach(function (post){ if (pagePosition > post) counter++})
        navLinks.forEach(function (link){ link.removeAttribute("class") })
        const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`)
        thisLink.classList.add("selected")
    }

})