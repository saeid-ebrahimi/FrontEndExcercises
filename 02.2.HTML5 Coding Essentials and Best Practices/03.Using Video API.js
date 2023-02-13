let vidElement = null
let playElement = null
let pauseElement = null
let replayElement = null
let muteElement = null
let list = null
let currentVideo = 0
let volumerange = null
const sources = [
    "https://mainline.i3s.unice.fr/mooc/big_buck_bunny_1080p_stereo.ogg",
    "https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.mp4",
    "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4"
]
const names = ["big buck bunny", "samurai Pizzacat", "animated mechanical art pieces at MIT"
]
window.onload = init 
function init(){
    vidElement = document.getElementById("vid")
    playElement = document.getElementById("play")
    pauseElement = document.getElementById("pause")
    replayElement = document.getElementById("replay")
    stopElement = document.getElementById("stop")
    vidElement.addEventListener("ended",stopVideo,false)
    muteElement = document.getElementById("mute")
    muteElement.addEventListener("click",toggleVolume,false)
    vidElement.addEventListener('progress',getPercentProgress, false)
    volumerange = document.getElementById("volumerange")
    vidElement.addEventListener('canplaythrough', vidElement.play, false);
    createPlayList()
}
function getPercentProgress(){
    
    var endBuf = vidElement.buffered.end(0)
    console.log(endBuf)
    var sofar = parseInt((endBuf / vidElement.duration)*100)
    document.getElementById("buffer").innerHTML = sofar + "%"
}
function createPlayList(){
    list = document.getElementById("playlist")
    list.innerHTML = ""
    for( let idx=0;idx < names.length; idx++){
        let listElem = document.createElement("li") 
        listElem.innerText = names[idx]
        if (idx === currentVideo % sources.length)
            listElem.style.color = "orange"
        list.appendChild(listElem)
    }
}
function nextVideo(){
    currentVideo++
    vidElement.src = sources[currentVideo % sources.length]
    vidElement.load()
    vidElement.play()
    createPlayList()
}
function prevVideo(){
    currentVideo--
    vidElement.src = sources[currentVideo % sources.length]
    vidElement.load()
    vidElement.play()
    createPlayList()
}
function playVideo(){
    vidElement.play()
    playElement.style.color="black"
    pauseElement.style.color = "white"
    replayElement.style.color = "white"
    stopElement.style.color = "white"
}
function pauseVideo(){
    vidElement.pause()
    pauseElement.style.color="black"
    playElement.style.color = "white"
    replayElement.style.color = "white"
    stopElement.style.color = "white"
}
function replayVideo(){
    vidElement.currentTime = 0
    vidElement.play()
    playElement.style.color = "black"
    pauseElement.style.color = "white"
    replayElement.style.color = "white"
    stopElement.style.color = "white"
}
function stopVideo(){
    vidElement.pause()
    vidElement.currentTime = 0
    playElement.style.color = "white"
    pauseElement.style.color = "white"
    replayElement.style.color = "white"
    stopElement.style.color = "black"
}
function addVideo(){
    const video1 = document.createElement("video")
    video1.src = "https://www.w3.org/2008/Talks/26-video-plh/small.ogg"
    video1.controls = true
    video1.poster= "https://mainline.i3s.unice.fr/mooc/q1fx20VZ-640.jpg"
    video1.crossorigin="anonymous"
    document.body.appendChild(video1)
}

function backward(){
    if(vidElement.currentTime > 10)
        vidElement.currentTime -= 10
    else
        vidElement.currentTime = 0
}
function forward(){
    if(vidElement.currentTime< vidElement.duration - 10)
        vidElement.currentTime += 10
    else
        stopVideo()
}
function toggleVolume(evt){
    if(vidElement.muted){
        evt.target.innerText = "volume_up"
        vidElement.muted = false
    }else{
        evt.target.innerText = "volume_off"
        vidElement.muted = true
    }
}
function changeVolume() {
    let volumeValue = volumerange.value / 100
    console.log(volumeValue)
    vidElement.volume = volumeValue
}