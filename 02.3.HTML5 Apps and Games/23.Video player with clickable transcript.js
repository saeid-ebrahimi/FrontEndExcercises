
const $ = document
const video = $.querySelector("#myVideo")
const transcriptDiv = $.querySelector("#transcript")
const tracksElems = $.querySelectorAll("track")
const buttonEnglish = $.querySelector("#buttonEnglish")
const buttonDeutsch = $.querySelector("#buttonDeutsch")
const buttonEnglishChapters = $.querySelector("#buttonEnglishChapters")
const tracksUrls  = []
const tracks = video.textTracks
const chapterMenuDiv = document.querySelector("#chapterMenu");
buttonEnglish.addEventListener("click", ()=>{
    loadTranscript('en')
}, false)
buttonDeutsch.addEventListener("click", () => { 
    loadTranscript('de')
}, false)
buttonEnglishChapters.addEventListener("click", () => {
    loadTranscript('en', 'chapters')
}, false)

window.onload = function(){
    langButtonDiv = document.querySelector("#langButtonDiv");
    currentLangSpan = document.querySelector("#currentLang");
    console.log("Number of tracks = " + video.textTracks.length);
    // Updates the display of the current track activated
    currentLangSpan.innerHTML = activeTrack();
    // Build the buttons for choosing a track
    buildButtons();
    console.log("init")
    for( let i = 0; i < tracksElems.length ; i++){
         
        tracksUrls[i] = tracksElems[i].src
    }

    buttonEnglish.disabled = false
    buttonDeutsch.disabled = false  
    buttonEnglishChapters.disabled = false

    buildChapterMenu("en", "chapters")
}


function loadTranscript(lang, kind){
    //console.log("load transcript "+lang)
    clearTranscriptDiv()
    if (kind !== 'chapters')
        disableAllTracks();
    for (let i = 0 ; i < tracks.length -1; i++){
        const track = tracks[i]
        const trackAsHtmlElem = tracksElems[i]
        
        if ( (track.language === lang) &&  (track.kind === kind))
        {
            track.mode = "showing"
            if( trackAsHtmlElem.readyState === 2){
                displayCues(track)
            }else{
                displayCuesAfterTrackLoaded(trackAsHtmlElem, track)
            
            }
        }
    }
    //console.log(tracks)
}
function buildChapterMenu(lang, kind){
    const track = tracks[tracks.length - 1]
    let trackAsHtmlElem = tracksElems[tracks.length - 1]

    if ((track.language === lang) && (track.kind === kind)) {
        // the track must be active if we want to highlight the 
        // current chapter while the video is playing
        track.mode = "showing";

        if (trackAsHtmlElem.readyState === 2) {
            // the track has already been loaded
            displayChapterMarkers(track);
        } else {
            displayChapterMarkersAfterTrackLoaded(trackAsHtmlElem, track);
        }
    }
}
function displayChapterMarkers(track){
    let cues = track.cues
    track.mode = "hidden"
    for (let i=0; i < cues.length; i++){
        let cue = cues[i]
        let cueObject = JSON.parse(cue.text)
        let description = cueObject.description
        let imageFileName = cueObject.image
        let imageURL = "https://mainline.i3s.unice.fr/mooc/" + imageFileName;

        let figure = document.createElement("figure")
        figure.classList.add("img")
        figure.innerHTML = "<img onclick='jumpTo(" + cue.startTime + ");'  class='thumb' src='" + imageURL + "'><figcaption class='desc'>" + description + "</figcaption></figure>";
        chapterMenuDiv.insertBefore(figure, null)
    }
}

function displayChapterMarkersAfterTrackLoaded(trackElem, track) {
    // Create a listener that will be called only when the track has
    // been loaded
    trackElem.addEventListener('load', (e) => {
        console.log("chapter track loaded");
        displayChapterMarkers(track);
    });
}

function clearTranscriptDiv(){
    transcriptDiv.innerHTML = ""

}
function disableAllTracks(){
    for(const track of tracks){
        track.mode = "disabled"
    }
    //console.log(tracks)
}
function displayCues(track){
    const cues = track.cues
    
    for(let i=0; i < cues.length; i++) {
        const cue = cues[i]
        addCueListeners(cue)
        const voices = getVoices(cue.text)
        let transText = ""
        if (voices.length>0){
            voices.forEach(vo => {
                transText += vo.voice + ': ' + removeHTML(vo.text)
                //console.log (transText)
            })
        }else{
            transText = cue.text
        }
        const clickableTransText = `<li class='cues' id="${cue.id}" onclick='jumpTo(${String(cue.startTime)})'> ${transText}</li>`
        console.log(clickableTransText)
        addToTranscriptDiv(clickableTransText);
    }
}
function displayCuesAfterTrackLoaded(trackElem, track) {
    // Create a listener that will be called only when the track has
    // been loaded
    trackElem.addEventListener('load', (e) => {
        console.log("track loaded");
        displayCues(track);
    });
}
function addCueListeners(cue){
    cue.onenter = function(){
        //console.log("enter id="+cue.id)
        const transcriptText = document.getElementById(cue.id)
        transcriptText.classList.add("current")
    }
    cue.onexit = function(){
        //console.log("exit id="+ cue.id)
        const transcriptText = document.getElementById(cue.id) 
        transcriptText.classList.remove("current")
    }
}
function addToTranscriptDiv(htmlText) {
  transcriptDiv.innerHTML += htmlText;
}
function getVoices(speech){
    const voices = []
    let pos = speech.indexOf("<v")
    while (pos != -1){
        endVoice = speech.indexOf(">")
        const voice = speech.substring(pos + 2, endVoice).trim();
        const endSpeech = speech.indexOf('</v>');
        const text = speech.substring(endVoice + 1, endSpeech);
        voices.push({
            'voice': voice,
            'text': text
        });
        speech = speech.substring(endSpeech + 4);
        pos = speech.indexOf('<v');
  }
  //console.log(voices)
  return voices;
}
function removeHTML(text) {
  const div = document.createElement('div');
  div.innerHTML = text;
  return div.textContent || div.innerText || '';
}
function jumpTo(time) {
    //console.log(video.currentTime)
    video.currentTime = time;
    video.play();
}
function buildButtons() {
    if (video.textTracks) {

        // for each track, create a button
        for (let i = 0; i < video.textTracks.length; i++) {
            // We create buttons only for the caption and subtitle tracks
            let track = video.textTracks[i];
            if ((track.kind !== "subtitles") && (track.kind !== "captions")) continue;
            createButton(track);
        }
    }
}
function createButton(track) {
    let b = document.createElement("button");
    b.value = track.label;
    b.setAttribute("lang", track.language);

    b.addEventListener('click', (e) => {
        // check which track is the track with the language we're
        // looking for
        let lang = e.target.getAttribute('lang');
        for (let i = 0; i < video.textTracks.length; i++) {
            if (video.textTracks[i].language == lang) {
                video.textTracks[i].mode = 'showing';
            } else {
                video.textTracks[i].mode = 'hidden';
            }
        }
        // update the span so that it displays the new active track
        currentLangSpan.innerHTML = activeTrack();
    });
    b.appendChild(document.createTextNode(track.label));
    langButtonDiv.appendChild(b);
}
function activeTrack() {
    for (let i = 0; i < video.textTracks.length; i++) {
        if (video.textTracks[i].mode === 'showing') {
            return video.textTracks[i].label + " (" + video.textTracks[i].language + ")";
        }
    }
    return "no subtitles/caption selected";
}
