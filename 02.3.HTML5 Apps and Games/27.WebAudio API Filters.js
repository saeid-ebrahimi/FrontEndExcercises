let gainSlider, balanceSlider
const drumsContext = window.AudioContext || window.webkitAudioContext
const drumsAudioContext = new drumsContext()
let gainNode
let convolverNode, convolverGain, directGain;
let decodedImpulse;
let impulseURL = "https://mainline.i3s.unice.fr/mooc/Scala-Milan-Opera-Hall.wav";
let compressorOn = false;

const guitarContext = new AudioContext()
let guitarplayer = document.getElementById("guitarplayer")
guitarplayer.onplay = () => { guitarContext.resume() }
let compressorButton = document.querySelector('#compressorButton');
let biquadFilterFrequencySlider = document.querySelector('#biquadFilterFrequencySlider');
let biquadFilterDetuneSlider = document.querySelector('#biquadFilterDetuneSlider');
let biquadFilterQSlider = document.querySelector('#biquadFilterQSlider');
let convolverSlider = document.querySelector('#convolverSlider');
let biquadFilterTypeSelector = document.querySelector('#biquadFilterTypeSelector');

let guitarSource = guitarContext.createMediaElementSource(guitarplayer)
const filterNode = guitarContext.createBiquadFilter()
guitarSource.connect(filterNode)
filterNode.connect(guitarContext.destination)

const compressorNode = drumsAudioContext.createDynamicsCompressor()


biquadFilterFrequencySlider.oninput = (event) =>{ 
    filterNode.frequency.value = parseFloat(event.target.value)
}
biquadFilterDetuneSlider.oninput = (event) => {
    filterNode.detune.value = parseFloat(event.target.value)
}
biquadFilterQSlider.oninput = (event) => {
    filterNode.Q.value = parseFloat(event.target.value)
}
biquadFilterTypeSelector.onchange = (event) => {
    filterNode.type.value = event.target.value
}
compressorButton.onclick = (evt) =>{
    if(compressorOn){
        compressorNode.disconnect(drumsAudioContext.destination)
        gainNode.disconnect(compressorNode)
        gainNode.connect(drumsAudioContext.destination)
        compressorButton.innerHTML = "Turn on Compressor"
        compressorButton.style.color = "aliceblue"
    }else{
        gainNode.disconnect(drumsAudioContext.destination)
        gainNode.connect(compressorNode)
        compressorNode.connect(drumsAudioContext.destination)
        compressorButton.innerHTML = "Turn Off Compressor"
        compressorButton.style.color = "lightblue"
    }
    compressorOn = !compressorOn;
}
window.onload = function () {

    const drumbPlayer = document.querySelector("#gainExample")
    drumbPlayer.onplay = () => { drumsAudioContext.resume() }
    gainSlider = document.querySelector("#gainSlider")
    balanceSlider = document.getElementById("balanceSlider")
    buildAduioGraph(drumbPlayer)
    loadImpulse(impulseURL, function(){
        // we get here only when the impulse has finished
        // loading
        buildAudioGraphConvolver();
    })
    // input listener on the gain slider
    convolverSlider.oninput = (evt) => {
        // We set the gain at the output of the convolver (wet signal route) with the
        // slider value, and we set the gain between the source and dest
        // (dry signal route) to 1 - wet
        // One "dry" route where we directly connect the audio source to the destination,
        // One "wet" route where we connect the audio source to the convolver node(that will add a reverb effect), then to the destination,
        convolverGain.gain.value = parseFloat(evt.target.value);
        directGain.gain.value = 1 - convolverGain.gain.value;
    }
}
function buildAudioGraphConvolver(){
    convolverNode = guitarContext.createConvolver()
    convolverNode.buffer = decodedImpulse

    convolverGain = guitarContext.createGain()
    convolverGain.gain.value = 0

    directGain = guitarContext.createGain()
    directGain.gain.value = 1

    guitarSource.connect(convolverNode)
    convolverNode.connect(guitarContext.destination)
}

function loadImpulse(url, callback){
    ajaxRequest = new XMLHttpRequest()
    ajaxRequest.open("GET", url, true)
    ajaxRequest.responseType = "arraybuffer"

    ajaxRequest.onload = () => {
        let impulseData = ajaxRequest.response
        guitarContext.decodeAudioData(impulseData, function(buffer){
            decodedImpulse = buffer
            callback()
        })
    }
    ajaxRequest.onerror = (e) => {
        console.log("Error with decoding audio data" + e.err);
    };

    ajaxRequest.send();
}
function buildAduioGraph(drumbPlayer) {
    const drumsSource = drumsAudioContext.createMediaElementSource(drumbPlayer)
    gainNode = drumsAudioContext.createGain()
    const pannerNode = drumsAudioContext.createStereoPanner()
    gainSlider.oninput = function (event) {
        gainNode.gain.value = event.target.value
    }
    balanceSlider.oninput = function (event) {
        pannerNode.pan.value = event.target.value
    }
    drumsSource.connect(gainNode)
    drumsSource.connect(pannerNode)
    pannerNode.connect(drumsAudioContext.destination)
    gainNode.connect(drumsAudioContext.destination);


}