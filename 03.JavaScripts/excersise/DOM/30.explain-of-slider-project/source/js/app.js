let $ = document
const sliderImageElem = $.querySelector("img")
const prevBtn = $.querySelector(".prev")
const nextBtn = $.querySelector(".next")

const imgSrcArr = ["image/1.jpg","image/2.png","image/3.jpg"]
let imgIndex = 0
function prevImage(){
    imgIndex--
    if (imgIndex < 0){
        imgIndex = imgSrcArr.length -1
    }
    sliderImageElem.setAttribute("src",imgSrcArr[imgIndex])
}

function nextImage(){
    imgIndex++
    if (imgIndex > imgSrcArr.length -1 ){
        imgIndex = 0
    }
    sliderImageElem.setAttribute("src",imgSrcArr[imgIndex])
}


prevBtn.addEventListener("click",prevImage)
nextBtn.addEventListener("click",nextImage)

setInterval(nextImage,2000)