const video = document.querySelector("#myVideo")
const trackStatusesDiv = document.querySelector("#trackStatusesDiv")
const forceLoadBtn1 = document.getElementById("loadFirstTrackBtn")
const forceLoadBtn2 = document.getElementById("loadThirdTrackBtn")
const trackElems = document.querySelectorAll("track")
const trackContentContainer = document.getElementById("trackContent")
const cueEventsContainer = document.getElementById("cueEvents")
const listenFirstTrackBtn = document.getElementById("listenFirstTrackBtn")
const listenThirdTrackBtn = document.getElementById("listenThirdTrackBtn")

forceLoadBtn1.addEventListener("click", () => {
    forceLoadTrack(0)
},false)
forceLoadBtn2.addEventListener("click", () => {
    forceLoadTrack(2)
}, false)
listenFirstTrackBtn.addEventListener("click", () =>{
    forceListenTrack(0)
}, false)
listenThirdTrackBtn.addEventListener("click", ()=>{
    forceListenTrack(1)
}, false)

window.onload = function(){
    forceLoadBtn1.disabled = false
    forceLoadBtn2.disabled = false
    listenFirstTrackBtn.disabled =false
    listenThirdTrackBtn.disabled = false
    displayTrackStatuses(trackElems)
}

function displayTrackStatuses(htmlTracks){
    trackStatusesDiv.innerHTML = "<h3>HTML track descriptions</h3>"
    for( let i=0; i< htmlTracks.length; i++){
        const trackElem = htmlTracks[i]
        const textTrack = trackElem.track
        const label = `label= ${trackElem.label} or ${textTrack.label}`
        const kind = `kind= ${trackElem.kind} or ${textTrack.kind}`
        const lang = `src language = ${trackElem.srclang}  or ${textTrack.language}`
        const readyState = `ready Status= ${trackElem.readyState}`
        const mode = `mode= ${textTrack.mode}`
        trackStatusesDiv.innerHTML += `<h4>Track: #${i + 1}</h4> <ul><li>${label}</li><li>${kind}</li><li>${lang}</li><li>${readyState}</li><li>${mode}</li></ul>`
    }
}
function forceLoadTrack(n){
    getTrack(trackElems[n], readContent)
}
function forceListenTrack(n){
    getTrack(trackElems[n], readCueEvents)
}
function readCueEvents(track){
    console.log("adding enter and exit listeners to all cues of this track")
    /*
    // uncomment this in order to listen to cuechange events
    cueEventsContainer.innerHTML = ""
    track.track.addEventListener("cuechange",(evt)=>{
        const activeCues = evt.target.activeCues
        for(let acue of activeCues){
            if (acue !== undefined)
                cueEventsContainer.innerHTML += '<p> entered cue id=' + acue.id + " " + acue.text + "</p>";
        }
        
    } ,false)
    */
   cueEventsContainer.innerHTML = ""
   const cues = track.cues
   for (const cue of cues){
        addCueListener(cue)
   }
   video.play()

}
function addCueListener(cue){
    cue.onenter = () => {
        cueEventsContainer.innerHTML += "entered cue id=" + cue.id + " " + cue.text + "<br>"
    }
    cue.onexit = () => {
        cueEventsContainer.innerHTML += "exited cue id=" + cue.id + "<br>"
    }
}
function readContent(track){
    console.log("reading content of loaded track")
    displayTrackStatuses(trackElems)
    trackContentContainer.innerHTML = ""
    let cues = track.cues
    for (let cue of cues){
        const id = cue.id + "<br>"
        const timeSegment = cue.startTime + " => "+cue.endTime + "<br>"
        const text = cue.text
        trackContentContainer.innerHTML += "<p>"+ id+timeSegment+text +"</p>"
        //console.log(cue.getCueAsHTML())
    }
}
function getTrack(htmlTrack, callback){
    const textTrack = htmlTrack.track
    if(htmlTrack.readyState === 2){
        console.log("text track already loaded");
        callback(textTrack);
    }else{
        textTrack.mode = "hidden"
        htmlTrack.addEventListener("load", function(e){
            callback(textTrack)
        })
    }
}
