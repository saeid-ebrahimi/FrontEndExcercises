let webcamStream = null
let video = null

let mediaRecorder;
let recordedBlobs;

let recordedVideo = document.getElementById("recorded")
let recordButton = document.querySelector('#record');
let playRecord = document.querySelector('#playRec');
let downloadButton = document.querySelector('#download');
let vgaButton, qvgaButton, hdButton, dimensions, mystream;
function init(){
   vgaButton = document.querySelector('#vga');
   qvgaButton = document.querySelector('#qvga');
   hdButton = document.querySelector('#hd');
   dimensions = document.querySelector('#dimensions'); 
   video = document.getElementById("liveVideo")
   recordButton.onclick = toggleRecording;
   playRecord.onclick = playRec;
   downloadButton.onclick = download;

qvgaButton.onclick = function() {
      getMedia(qvgaConstraints);
  };
  
  vgaButton.onclick = function() {
    getMedia(vgaConstraints);
  };
  
  hdButton.onclick = function() {
    getMedia(hdConstraints);
  };
// Trick: check regularly the size of the video element and display it
  // When getUserMedia is called the video element is resized but for 
  // a while its size is zero pixels... so we check every half a second
    video.addEventListener('play', function() {
       setTimeout(function() {
           displayVideoDimensions();
       }, 500);
    });
}
function handleDataAvailable(event) {
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}
function handleStop(event) {
  console.log('Recorder stopped: ', event);
}
function toggleRecording() {
  if (recordButton.classList.contains('normal')) {
    startRecording();
    recordButton.classList.remove('normal')
    recordButton.classList.add('active')
  } else {
    stopRecording();
    recordButton.classList.remove('active')
    recordButton.classList.add('normal')
    playRec.disabled = false;
    downloadButton.disabled = false;
  }
}
function startRecording() {
  recordedBlobs = [];
    
  try {
    mediaRecorder = new MediaRecorder(window.webcamStream);
  } catch (e) {
    console.error('Exception while creating MediaRecorder: ' + e);
    return;
  }
  console.log('Created MediaRecorder', mediaRecorder);
  recordButton.classList.remove('active')
  recordButton.classList.add('normal')
  playRecord.disabled = true;
  downloadButton.disabled = true;
  mediaRecorder.onstop = handleStop;
  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start(10); // collect 10ms of data
  console.log('MediaRecorder started', mediaRecorder);
}
function stopRecording() {
  mediaRecorder.stop();
  console.log('Recorded Blobs: ', recordedBlobs);
  recordedVideo.controls = true;
}
function playRec() {
  const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
  recordedVideo.src = window.URL.createObjectURL(superBuffer);
}
function download() {
  const blob = new Blob(recordedBlobs, {type: 'video/webm'});
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'test.webm';
  document.body.appendChild(a);
  a.click();
  setTimeout(function() {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
}

function displayVideoDimensions() {
  dimensions.innerHTML = 'Actual video dimensions: ' + video.videoWidth +
    'x' + video.videoHeight + 'px.';
}
function getMedia(constraints) {
  if (mystream) {
    video.srcObject = null;
    mystream.getTracks()[0].stop();
  }
 navigator.mediaDevices.getUserMedia(constraints)
 .then((stream) => {
   recordButton.disabled = false;
   video.srcObject = stream;
   video.play();
   window.webcamStream = stream;
 })
 .catch((error) =>{
    console.log('navigator.getUserMedia error: ', error);
 });
}
function startStream() {
    navigator.mediaDevices.getUserMedia({
        audio:true,
        video:true
    }).then((stream) => {
        video = document.getElementById("liveVideo")
        video.srcObject = stream
        video.play()
        webcamStream = stream;
    }).catch((error)=>{
        console.log('navigator.getUserMedia error: ', error)
    })
}
function stopStream(){
    webcamStream.getTracks()[0].stop() // audio
    webcamStream.getTracks()[1].stop() // video
}
let idx = 0
let filters = [
    'grayscale',
    'sepia',
    'blur',
    'brightness',
    "contrast",
    'hue-rotate',
    'hue-rotate2',
    'hue-rotate3',
    'saturation',
    'invert',
    'normal',
]
function changeFilter(elem){
    
    console.log("toggle effect: "+ filters[idx % filters.length])
    let effect = filters[idx % filters.length]
    elem.className = effect
    idx++
}

function snapShot(){
    let container = document.getElementById("myshots")
    let canvas = document.createElement("canvas")
    canvas.className = 'myshot'
    let ctx = canvas.getContext("2d")
    ctx.drawImage(video,0,0,canvas.width,canvas.height)
    container.appendChild(canvas)

}

var qvgaConstraints = {
  video: {
    width: { max: 320 },
    height: { max: 180 }
  }
};

var vgaConstraints = {
    video: {
    width: { max: 640 },
    height: { max: 360 }
  }
};

var hdConstraints = {
  video: {
    width: { max: 1280 },
    height: { max: 720 }
  }
};
