// 
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
if (!audioCtx) {
    console.error('Web Audio API not supported');
    alert('Web Audio API is not supported on this Browser');
}

var canvas1, canvas2, canvas3;
var canvasCtx1, canvasCtx2, canvasCtx3;
var width1, height1, width2, height2, width3, height3;
var analyser, bufferLength, dataArray;
var analyserL, bufferLengthL, dataArrayL;
var analyserR, bufferLengthR, dataArrayR;
var splitter;
var player = document.getElementById("player");
var source = audioCtx.createMediaElementSource(player);
var FFTpoints = 2 ** 8; // must be a 2**n value
var barGrad;

// Handle start button after user interaction with the page.
// This is required 'just in case' to play audio in Chrome & iOS devices
playDiv = document.querySelector('.startBut');
playBut = document.querySelector('.startBut button');
playBut.addEventListener('click', function () {
    // check if audio audioCtx is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
        console.log('AudioCtx started after user action');
    }
    playDiv.remove();  // remove button after 1st click
    // start main code after page load
    window.onload = init();
})

function init() {
    // prepare eveything for the canvases
    canvas1 = document.querySelector("#Canvas-1");
    canvas2 = document.querySelector("#Canvas-2");
    canvas3 = document.querySelector("#Canvas-3");

    width1 = canvas1.width;
    height1 = canvas1.height;
    canvasCtx1 = canvas1.getContext('2d');

    width2 = canvas2.width;
    height2 = canvas2.height;
    canvasCtx2 = canvas2.getContext('2d');

    width3 = canvas3.width;
    height3 = canvas3.height;
    canvasCtx3 = canvas3.getContext('2d');

    buildAudioGraph();

    // start the visualisations
    vizMeterL();
    vizMeterR();
    vizWave();
    vizFreqs();
}


function buildAudioGraph() {
    // Analysers for Viz functions
    // 
    //  1st: freq/wave plotting
    analyser = audioCtx.createAnalyser();
    // set its properties
    analyser.fftSize = FFTpoints;
    bufferLength = analyser.fftSize;
    dataArrayTime = new Uint8Array(bufferLength);
    dataArrayFreq = new Uint8Array(bufferLength / 2);
    //  2nd: Meter [L:R] plotting
    analyserL = audioCtx.createAnalyser();
    analyserR = audioCtx.createAnalyser();
    // set its properties
    analyserL.fftSize = FFTpoints;
    analyserR.fftSize = FFTpoints;
    // buffers
    bufferLengthL = FFTpoints;
    // dataArrayL = new Uint8Array(bufferLengthL);
    dataArrayL = new Float32Array(bufferLengthL);
    bufferLengthR = FFTpoints;
    // dataArrayR = new Uint8Array(bufferLengthR);
    dataArrayR = new Float32Array(bufferLengthR);

    // creater a splitter to get L & R channels
    splitter = audioCtx.createChannelSplitter(2);

    // connect the nodes
    source.connect(analyser);
    source.connect(splitter);
    splitter.connect(analyserL, 0);
    splitter.connect(analyserR, 1);
    source.connect(audioCtx.destination);

    // play Audio
    player.play();
}


function vizWave() {
    var canvasCtx = canvasCtx2;
    var width = width2;
    var height = height2;
    var dataArray = dataArrayTime;
    canvasCtx.save();
    // clear the canvas
    // canvasCtx.clearRect(0, 0, width, height);
    // OR
    // use rgba fill to give a slight blur effect
    canvasCtx.stroke();
    canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.075)';
    canvasCtx.fillRect(0, 0, width, height);

    // We will draw it as a path of connected lines
    // First, clear the previous path that was in the buffer
    canvasCtx.beginPath();

    // draw the data as a waveform
    // Get the data from the analyser
    analyser.getByteTimeDomainData(dataArray); // values are between 0 and 255

    // slice width
    var sliceWidth = width / (bufferLength * 1);

    var x = 0;
    for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i]; // between 0 and 255
        v = v / 255; // now between 0 and 1

        var y = (v * height);
        if (i === 0) {
            canvasCtx.moveTo(x, y);
        } else {
            canvasCtx.lineTo(x, y);
            if (v > 0.5) {
                canvasCtx.strokeStyle = "red";
                // canvasCtx.setLineDash([4, 2]);
            } else {
                canvasCtx.strokeStyle = "whitesmoke";
                // canvasCtx.setLineDash([2, 4]);
            }
        }

        x += sliceWidth;
    }
    // canvasCtx.globalAlpha = 0.75;
    // draw the whole waveform (a path)
    canvasCtx.lineWidth = 2;
    canvasCtx.stroke();
    canvasCtx.restore();
    // call again the visualize function at 60 frames/s
    requestAnimationFrame(vizWave);
}


function vizFreqs() {
    var canvasCtx = canvasCtx3;
    var width = width3;
    var height = height3;
    var dataArray = dataArrayFreq;
    canvasCtx.save();
    canvasCtx.fillStyle = "rgba(0, 0, 0, 0.05)";
    canvasCtx.fillRect(0, 0, width, height);

    analyser.getByteFrequencyData(dataArray);
    var nbFreq = dataArray.length;

    var SPACER_WIDTH = 5;
    var BAR_WIDTH = 2;
    var OFFSET = 100;
    var CUTOFF = 23;
    var HALF_HEIGHT = height / 2;
    var numBars = 1.7 * Math.round(width / SPACER_WIDTH);
    var magnitude;

    canvasCtx.lineCap = 'round';

    for (var i = 0; i < numBars; ++i) {
        magnitude = 0.3 * dataArray[Math.round((i * nbFreq) / numBars)];

        canvasCtx.fillStyle = "hsl( " + Math.round((i * 360) / numBars) + ", 100%, 50%)";
        canvasCtx.fillRect(i * SPACER_WIDTH, HALF_HEIGHT, BAR_WIDTH, -magnitude);
        canvasCtx.fillRect(i * SPACER_WIDTH, HALF_HEIGHT, BAR_WIDTH, magnitude);
    }

    // Draw animated white lines top
    canvasCtx.strokeStyle = "white";
    canvasCtx.beginPath();

    for (i = 0; i < numBars; ++i) {
        magnitude = 0.3 * dataArray[Math.round((i * nbFreq) / numBars)];
        if (i > 0) {
            canvasCtx.lineTo(i * SPACER_WIDTH, HALF_HEIGHT - magnitude);
        } else {
            canvasCtx.moveTo(i * SPACER_WIDTH, HALF_HEIGHT - magnitude);
        }
    }
    for (i = 0; i < numBars; ++i) {
        magnitude = 0.3 * dataArray[Math.round((i * nbFreq) / numBars)];
        if (i > 0) {
            canvasCtx.lineTo(i * SPACER_WIDTH, HALF_HEIGHT + magnitude);
        } else {
            canvasCtx.moveTo(i * SPACER_WIDTH, HALF_HEIGHT + magnitude);
        }
    }
    canvasCtx.stroke();
    canvasCtx.restore();

    requestAnimationFrame(vizFreqs);
}


// Meter canvas graphic settings
// 
function meterBar(canvasCtx, width) {
    // set global canvas transparency value
    // canvasCtx.globalAlpha = 0.15;

    // set global canvas linear gradient for bars along canvas width
    // REMEMBER: start point (0, 0) is the top left corner of the canvas
    // the 2nd point has 'y' positive towards the bottom of the canvas
    barGrad = canvasCtx.createLinearGradient(0, 0, width, 0);
    // we add the colours for the gradient to be applied based on analyser values
    barGrad.addColorStop(0.1, "turquoise");
    barGrad.addColorStop(0.3, "mediumseagreen");
    barGrad.addColorStop(0.6, "gold");
    barGrad.addColorStop(1.0, "darkred");
    // we fill the bar with the gradient
    canvasCtx.fillStyle = barGrad;
}


function vizMeterL() {
    var canvasCtx = canvasCtx1;
    var width = width1;
    var height = height1 / 2;
    var analyser = analyserL;
    var dataArray = dataArrayL;
    var bufferLength = bufferLengthL;
    canvasCtx.save();
    // clear the canvas
    // canvasCtx.clearRect(0, 0, width, height);
    // OR
    // use rgba fill to give a slight blur effect
    canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.07)';
    canvasCtx.fillRect(0, 0, width, height);
    meterBar(canvasCtx, width); // apply canvas gradient function

    // Get the data from the analyser
    // analyser.getByteTimeDomainData(dataArray); // values are between 0 and 255
    analyser.getFloatTimeDomainData(dataArray); // get raw wave data normalised [-1 : 1]

    for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i];
        // draw absolute wave values between [-1 : 1]
        canvasCtx.fillRect(0, 0, Math.abs(v) * width, height);
    }
    canvasCtx.restore();
    // call again the visualize function at 60 frames/s
    requestAnimationFrame(vizMeterL);
}


function vizMeterR() {
    var canvasCtx = canvasCtx1;
    var width = width1;
    var height = height1 / 2;
    var analyser = analyserR;
    var dataArray = dataArrayR;
    var bufferLength = bufferLengthR;
    canvasCtx.save();
    // clear the canvas
    // canvasCtx.clearRect(0, 0, width, height);
    // OR
    // use rgba fill to give a slight blur effect
    canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.07)';
    canvasCtx.fillRect(0, height, width, 2 * height);
    meterBar(canvasCtx, width); // apply canvas gradient function

    // Get the data from the analyser
    // analyser.getByteTimeDomainData(dataArray); // values are between 0 and 255
    analyser.getFloatTimeDomainData(dataArray); // get raw wave data normalised [-1 : 1]

    for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i];
        // draw absolute wave values between [-1 : 1]
        canvasCtx.fillRect(0, height, Math.abs(v) * width, 2 * height);
    }
    canvasCtx.restore();
    // call again the visualize function at 60 frames/s
    requestAnimationFrame(vizMeterR);
}