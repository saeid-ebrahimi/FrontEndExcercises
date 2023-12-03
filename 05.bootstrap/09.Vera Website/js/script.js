// Replace Text In Header
const checkReplace = document.querySelector(".replace-me")
if (checkReplace !== null){
    const replace = new ReplaceMe(checkReplace, {
        animation: "animated fadeIn",
        speed: 2000,
        separator: ",",
        loopCount: 'infinite',
        autoRun: true,
    })
}

function userScroll(){
    const navBar = document.querySelector(".navbar")
    const toTopBtn = document.querySelector("#to-top")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100){
            navBar.classList.add("bg-dark")
            navBar.classList.add('border-bottom')
            navBar.classList.add("border-secondary")
            navBar.classList.add('navbar-sticky')
            toTopBtn.classList.add("show")
        }else{
            navBar.classList.add("bg-dark")
            navBar.classList.add('border-bottom')
            navBar.classList.add("border-secondary")
            navBar.classList.add('navbar-sticky')
        }
    })
}
document.addEventListener("DOMContentLoaded", userScroll);
const videoBtn = document.querySelector(".video-btn")
const videoModal = document.querySelector("#videoModal")
const video = document.querySelector("#video")
let videoSrc;
if (videoBtn !== null){
    videoBtn.addEventListener('click', () => {
       videoSrc = videoBtn.getAttribute("data-bs-src")
    })
}
if (videoModal !== null){
    videoModal.addEventListener('shown.bs.modal', ()=>{
        video.setAttribute('src', videoSrc + "?autoplay=1;modestbranding=1;showInfo=0;")
    })
    videoModal.addEventListener("hide.bs.modal", () => {
        video.setAttribute('src', videoSrc)
    })
}