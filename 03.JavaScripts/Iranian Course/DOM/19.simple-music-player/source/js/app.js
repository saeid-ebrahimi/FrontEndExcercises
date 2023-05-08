const musicList = [
    "media/html.m4a",
    "media/bazar.m4a",
    "media/kar.m4a"
]
let currentMusic = 1
const audioElem = document.querySelector("audio") 
function timeMinuMusicHandler(){
    let currTime = audioElem.currentTime
    if (currTime < 5)
        currTime = 0
    else
        currTime -= 5
    audioElem.currentTime = currTime
}
function previousMusicHandler(){
    currentMusic -= 1
    if(currentMusic < 0)
        currentMusic = musicList.length -1
    audioElem.src = musicList[currentMusic]
    playHandler()
}
function playHandler(){
    audioElem.play()
}
function pauseHandler(){
    audioElem.pause()
}
function nextMusicHandler(){
    currentMusic += 1
    if(currentMusic >= musicList.length)
        currentMusic = 0
    audioElem.src = musicList[currentMusic]
    playHandler()
}
function musicSpeedHandler(){
    audioElem.playbackRate = 2
}
function timePlusMusicHandler(){
    let currTime = audioElem.currentTime
    if (currTime < 5 + audioElem.duration)
        currTime += 5
    else
        currTime =audioElem.duration
    audioElem.currentTime = currTime
}