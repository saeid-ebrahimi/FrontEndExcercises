const videoElem = document.getElementById("myVideo")
const trackElems = document.getElementsByTagName("track")
const statusContainer = document.getElementById("currentTrackStatuses")
const captionContainer = document.getElementById("caption")
const descriptionContainer = document.getElementById("description")
const chapterContainer = document.getElementById("chapter")
const thumbContainer = document.getElementById("thumb")

const buttons = document.getElementsByTagName("button")
document.body.onload = () => {
    videoElem.addEventListener("loadedmetadata", function(){
        console.log("video metadata loaded")
        for (const trackElem of trackElems){
            const track = trackElem.track
            if(track.mode === "showing"){
                track.addEventListener("cuechange", logCue, false)
            }
        }
        displayTarcksStatus()
       
    })
    for (let i=0; i < buttons.length;i++){
        const btn = buttons[i]
        btn.addEventListener("click", (evt)=>{
            toggleTrack(i)
        })
    }
}
function logCue(evt){
    console.log("log cues")
    const track = evt.target
    const activeCues = track.activeCues
    if (activeCues && activeCues.length){
        const text = activeCues[0].text
        const logText = "Active " + track.kind+" changed to: "+text
        let container
        switch(track.kind){
            case "captions":
                container = captionContainer
                break
            case "descriptions":
                container = descriptionContainer
                break
            case "chapters":
                container = chapterContainer
                break
            case "metadata":
                container = thumbContainer
                break
        }
        appendToScrollableDiv(container, logText)
    }
}
function clearDiv(div){
    div.innerHTML = ""
}
function displayTarcksStatus(){
    for (let i = 0; i < trackElems.length; i++) {
        const textTrack = trackElems[i].track
        if (textTrack.mode === "disabled") {
            mode = "<span style='color: red'>" + textTrack.mode + "</span>"
        } else if (textTrack.mode === "showing") {
            mode = "<span style='color:green'>" + textTrack.mode + "</span>"
        } else if (textTrack.mode === "hidden") {
            mode = "<span style='color:blue'>" + textTrack.mode + "</span>"
        }
        appendToScrollableDiv(statusContainer, `track ${i}: ${textTrack.label} ${textTrack.kind} in mode ${mode}`);
    }
}
function appendToScrollableDiv(div,text){
    div.innerHTML += text + "<br>"
    div.scrollTop = div.scrollHeight
}
function toggleTrack(i){
    const textTrack = trackElems[i].track
    switch (textTrack.mode) {
        case "disabled":
            textTrack.addEventListener("cuechange", logCue, false)
            textTrack.mode = "hidden"
            break
        case "hidden":
            textTrack.addEventListener("cuechange", logCue, false)
            textTrack.mode = "showing"
            break
        case "showing":
            textTrack.removeEventListener("cuechange", logCue, false)
            textTrack.mode = "disabled"
            break
    }
    clearDiv(statusContainer)
    displayTarcksStatus()
    //appendToScrollableDiv(statusContainer, "<br>" + textTrack.label + " are now " + textTrack.mode)
}