let vidElement = null
let playElement = null
let pauseElement = null
let replayElement = null

window.onload = init 
function init(){
    vidElement = document.getElementById("vid")
    playElement = document.getElementById("play")
    pauseElement = document.getElementById("pause")
    replayElement = document.getElementById("replay")
}

function playVideo(){
    vidElement.play()
    playElement.style.color="black"
    pauseElement.style.color = "white"
    replayElement.style.color = "white"
}
function pauseVideo(){
    vidElement.pause()
    pauseElement.style.color="black"
    playElement.style.color = "white"
    replayElement.style.color = "white"
}
function replayVideo(){
    vidElement.currentTime = 0
    playElement.style.color = "white"
    pauseElement.style.color = "white"
    replayElement.style.color = "black"
}
function addVideo(){
    const video1 = document.createElement("video")
    video1.src = "https://www.w3.org/2008/Talks/26-video-plh/small.ogg"
    video1.controls = true
    document.body.appendChild(video1)
}

function backward(){
    if(vidElement.currentTime > 10)
        vidElement.currentTime -= 10
        vidElement.
    else
        vidElement.currentTime = 0
}
function forward(){
    if(vidElement.currentTime< 100)
        vidElement.currentTime += 10
    else
        vidElement.currentTime = 
}