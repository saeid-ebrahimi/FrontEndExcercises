const $ = document
const modal = $.querySelector(".modal-parent")
const btn = $.querySelector("button")
const XSpan = $.querySelector(".X")
const section = $.querySelector("section")

btn.addEventListener("click",function(){
    modal.style.display = "block"
    section.style.filter = "blur(20px)"
})
XSpan.addEventListener("click",hideModal)
$.body.addEventListener("keydown",function(evt){
    if (evt.key === "Escape")
    {
        hideModal()
        btn.blur()
    }
})
function hideModal(){
    modal.style.display = "none"
    section.style.filter = "blur(0px)" 
}