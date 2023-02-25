
let analyzer
let dataArray, bufferLength
const canvas = document.getElementById("myCanvas")
const width = canvas.width
const height = canvas.height
const canvasContext = canvas.getContext("2d")

const audioContext = new AudioContext()

let mediaElement = document.getElementById('player');
let sourceNode = audioContext.createMediaElementSource(mediaElement);
mediaElement.onplay = () => {
    audioContext.resume();
}
const frequences = [60, 170, 350, 1000, 3500, 10000]
const filters = []
const gainRanges = document.querySelectorAll(".controls input")
gainRanges.forEach((range, idx) => {
    console.log(range, idx)
    range.addEventListener("change", function (evt) {
        changeGain(evt.target.value, idx)
        console.log("change gain")
    })
})
frequences.forEach((freq) => {
    const eq = audioContext.createBiquadFilter()
    eq.frequency.value = freq
    eq.type = "peaking"
    eq.gain.value = 0
    filters.push(eq)
})
sourceNode.connect(filters[0])
for (let i = 0; i < filters.length - 1; i++) {
    filters[i].connect(filters[i + 1])
}
filters[filters.length - 1].connect(audioContext.destination)
function changeGain(sliderVal, filterIdx) {
    const value = parseFloat(sliderVal)
    filters[filterIdx].gain.value = value
    const output = document.querySelector("#gain" + filterIdx)
    output.value = value + "db"
}
window.onload = () => {
    bulidAudioGraph()
    requestAnimationFrame(visualize)
}

function bulidAudioGraph() {
    analyzer = audioContext.createAnalyser()
    // Try changing for lower values: 512, 256, 128, 64...
    analyzer.fftSize = 2048
    bufferLength = analyzer.frequencyBinCount
    dataArray = new Uint8Array(bufferLength)

    sourceNode.connect(analyzer)
    analyzer.connect(audioContext.destination)
}

function visualize() {
    canvasContext.fillStyle = 'rgba(0, 0, 0, 0.5)'
    canvasContext.fillRect(0, 0, width, height)

    analyzer.getByteTimeDomainData(dataArray)
    canvasContext.lineWidth = 2
    canvasContext.strokeStyle = "lightblue"
    canvasContext.beginPath()
    let sliceWidth = width / bufferLength
    let x = 0
    for (let i = 0; i < bufferLength; i++) {
        // Uint8Array  => 2^8 -1 = 255
        let v = dataArray[i] / 255
        let y = v * height
        if (i === 0) {
            canvasContext.moveTo(x, y);
        } else {
            canvasContext.lineTo(x, y);
        }

        x += sliceWidth;
    }
    canvasContext.lineTo(canvas.width, canvas.height / 2);
    canvasContext.stroke();
    requestAnimationFrame(visualize);
}