// DOM => Document Object Model
// BOM => Browser Object Model

let customScroll = document.querySelector('#scroll')

window.addEventListener('scroll', function () {
    
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowHeight = window.innerHeight
    // documentHeight-windowHeight => for calculate real height in inspect mode
    let scrollPercent = scrollTop / (documentHeight-windowHeight)
    customScroll.style.width =Math.round(scrollPercent*100) + "%"
})