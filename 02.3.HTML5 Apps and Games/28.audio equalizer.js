
let analyzer, analyzer2, analyzer3
let dataArray, bufferLength, dataArray2, bufferLength2, dataArray3, bufferLength3

const canvas = document.getElementById("myCanvas")
const width = canvas.width
const height = canvas.height
const canvasContext = canvas.getContext("2d")


const canvas2 = document.getElementById("myCanvas2")
const width2 = canvas2.width
const height2 = canvas2.height
const canvasContext2 = canvas2.getContext("2d")

const canvas3 = document.getElementById("myCanvas3")
const width3 = canvas3.width
const height3 = canvas3.height
const canvasContext3 = canvas3.getContext("2d")

let gradient
let analyzerLeft, analyzerRight
let dataArrayLeft, dataArrayRight
let bufferLengthLeft, bufferLengthRight
const canvas4 = document.getElementById("myCanvas4")
const width4 = canvas4.width
const height4 = canvas4.height
const offset = 5
const canvasContext4 = canvas4.getContext("2d")
const audioContext = new AudioContext()

let masterGain, stereoPanner

let mediaElement = document.getElementById('player');
let sourceNode = audioContext.createMediaElementSource(mediaElement);

const frequences = [60, 170, 350, 1000, 3500, 10000]
const filters = []
const gainRanges = document.querySelectorAll(".controls input")

window.onload = () => {
    gainRanges.forEach((range, idx) => {
        //console.log(range, idx)
        range.addEventListener("change", function (evt) {
            changeGain(evt.target.value, idx)
        })
    })

    bulidAudioGraph()
    requestAnimationFrame(visualizeCanvasContext1)
    requestAnimationFrame(visualizeCanvasContext2)
    requestAnimationFrame(visualizeCanvasContext3)
    gradient = canvasContext.createLinearGradient(width4, 0, 0, height4);
    gradient.addColorStop(1, '#000000');
    gradient.addColorStop(0.75, '#ff0000');
    gradient.addColorStop(0.25, '#ffff00');
    gradient.addColorStop(0, '#ffffff');
    requestAnimationFrame(visualizeCanvasContext4)
}

function bulidAudioGraph(){
    mediaElement.addEventListener('play', () => audioContext.resume());

    analyzer = audioContext.createAnalyser()
    analyzer2 = audioContext.createAnalyser()
    analyzer3 = audioContext.createAnalyser()
     // Try changing for lower values: 512, 256, 128, 64...
    analyzer.fftSize = 1024
    analyzer2.fftSize = 512
    analyzer3.fftSize = 512

    bufferLength = analyzer.frequencyBinCount
    bufferLength2 = analyzer2.frequencyBinCount
    bufferLength3 = analyzer3.frequencyBinCount

    dataArray = new Uint8Array(bufferLength)
    dataArray2 = new Uint8Array(bufferLength2)
    dataArray3 = new Uint8Array(bufferLength3)

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
    masterGain = audioContext.createGain()
    masterGain.value = 1

    filters[filters.length - 1].connect(masterGain)

    stereoPanner = audioContext.createStereoPanner()
    masterGain.connect(stereoPanner)

    stereoPanner.connect(analyzer)
    stereoPanner.connect(analyzer2)
    stereoPanner.connect(analyzer3)

    analyzer.connect(audioContext.destination)
    analyzer2.connect(audioContext.destination)
    analyzer3.connect(audioContext.destination)

    // two analysers for the stereo volume meters
    analyzerLeft = audioContext.createAnalyser()
    analyzerLeft.fftSize = 256
    bufferLengthLeft = analyzerLeft.frequencyBinCount
    dataArrayLeft = new Uint8Array(bufferLengthLeft)

    analyzerRight = audioContext.createAnalyser()
    analyzerRight.fftSize = 256
    bufferLengthRight = analyzerRight.frequencyBinCount
    dataArrayRight = new Uint8Array(bufferLengthRight)
    const splitter = audioContext.createChannelSplitter()
    stereoPanner.connect(splitter)
    splitter.connect(analyzerLeft,0,0)
    splitter.connect(analyzerRight,1,0)
    // No need to connect these analysers to something, the sound
    // is alreadu connected through the route that goes through
    // the analyser used for the waveform
}

function changeGain(sliderVal, filterIdx) {
    const value = parseFloat(sliderVal)
    filters[filterIdx].gain.value = value
    const output = document.querySelector("#gain" + filterIdx)
    output.value = value + "db"
}
function changeMasterGain(sliderVal) {
    const value = parseFloat(sliderVal);
    masterGain.gain.value = value / 10;

    // update output labels
    const output = document.querySelector("#masterGainOutput");
    output.value = value;
}
function changeBalance(sliderVal) {
    // between -1 and +1
    const value = parseFloat(sliderVal);

    stereoPanner.pan.value = value;
    // update output labels
    const output = document.querySelector("#balanceOutput");
    output.value = value;
}
function visualizeCanvasContext4(){
    clearCanvas(canvasContext4);

    drawVolumeMeter4();
    requestAnimationFrame(visualizeCanvasContext4)
}
function clearCanvas(canvasContext) {
    canvasContext.save();
    // clear the canvas
    // like this: canvasContext.clearRect(0, 0, width, height);
    // Or use rgba fill to give a slight blur effect
    canvasContext.fillStyle = 'rgba(0, 0, 0, 0.5)';
    canvasContext.fillRect(0, 0, width, height);
    canvasContext.restore();
}

function visualizeCanvasContext3() {
    canvasContext3.save()
    canvasContext3.fillStyle = "rgba(0, 0, 0, 0.05)";
    canvasContext3.fillRect(0, 0, width3, height3);

    analyzer3.getByteFrequencyData(dataArray3);

    const nbFreq = dataArray3.length;
    const SPACER_WIDTH = 5;
    const BAR_WIDTH = 2;
    const HALF_HEIGHT = height3 / 2;
    
    const numBars = 1.7 * Math.round(width3 / SPACER_WIDTH);
    let magnitude;

    canvasContext3.lineCap = 'round';

    // bars
    for (let i = 0; i < numBars; ++i) {

        magnitude = 0.3 * dataArray3[Math.round((i * nbFreq) / numBars)];
        
        canvasContext3.fillStyle = "hsl( " + Math.round((i * 360) / numBars) + ", 100%, 50%)";
        // lower
        canvasContext3.fillRect(i * SPACER_WIDTH, HALF_HEIGHT, BAR_WIDTH, -magnitude);
        // upper
        canvasContext3.fillRect(i * SPACER_WIDTH, HALF_HEIGHT, BAR_WIDTH, magnitude);

    }

    // Draw animated white lines top
    canvasContext3.strokeStyle = "white";
    canvasContext3.beginPath();
    // upper lines
    for (let i = 0; i < numBars; ++i) {
        magnitude = 0.3 * dataArray3[Math.round((i * nbFreq) / numBars)];
        if (i > 0) {
            //console.log("line lineTo "  + i*SPACER_WIDTH + ", " + -magnitude);
            canvasContext3.lineTo(i * SPACER_WIDTH, HALF_HEIGHT - magnitude);
        } else {
            //console.log("line moveto "  + i*SPACER_WIDTH + ", " + -magnitude);
            canvasContext3.moveTo(i * SPACER_WIDTH, HALF_HEIGHT - magnitude);
        }
    }
    // lower lines
    for (let i = 0; i < numBars; ++i) {
        magnitude = 0.3 * dataArray3[Math.round((i * nbFreq) / numBars)];
        if (i > 0) {
            //console.log("line lineTo "  + i*SPACER_WIDTH + ", " + -magnitude);
            canvasContext3.lineTo(i * SPACER_WIDTH, HALF_HEIGHT + magnitude);
        } else {
            //console.log("line moveto "  + i*SPACER_WIDTH + ", " + -magnitude);
            canvasContext3.moveTo(i * SPACER_WIDTH, HALF_HEIGHT + magnitude);
        }
    }
    canvasContext3.stroke();
    canvasContext3.restore()
    requestAnimationFrame(visualizeCanvasContext3)
}
function visualizeCanvasContext2(){
    // Uint8Array  => 2^8 / 2 
    let heightScale = height2 / 128;
    canvasContext2.clearRect(0, 0, width2, height2)
    analyzer2.getByteFrequencyData(dataArray2)

    let barWidth = width2 / bufferLength2;
    let barHeight
    let x2 = 0
    for (let i = 0; i < bufferLength2; i++) {
        barHeight = dataArray2[i]
        canvasContext2.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
        barHeight *= heightScale;
        canvasContext2.fillRect(x2, height2 - barHeight / 2, barWidth, barHeight / 2);
        x2 += barWidth + 1;
    }
    requestAnimationFrame(visualizeCanvasContext2)
}

function visualizeCanvasContext1(){
    // visualize canvas context 1
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
    requestAnimationFrame(visualizeCanvasContext1)
}

function drawVolumeMeter4(){
    canvasContext4.save()
    
    canvasContext4.fillStyle = gradient;
    analyzerLeft.getByteFrequencyData(dataArrayLeft)
    let averageLeft = getAverageVolume(dataArrayLeft)
    canvasContext4.fillRect(0, offset, width4 - averageLeft,(height/ 2)-offset);

    analyzerRight.getByteFrequencyData(dataArrayRight)
    let averageRight = getAverageVolume(dataArrayRight)
    canvasContext4.fillRect(0, (height / 2) + offset, width4 - averageRight, height4 - offset);
    
    canvasContext4.restore()
}
function getAverageVolume(array) {
    let values = 0;
    let average;

    let length = array.length;

    // get all the frequency amplitudes
    for (let i = 0; i < length; i++) {
        values += array[i];
    }

    average = values / length;
    return average;
}
