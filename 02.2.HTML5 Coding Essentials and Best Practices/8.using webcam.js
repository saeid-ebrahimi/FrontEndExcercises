let webcamStream = null
let video = null
let vgaButton, qvgaButton, hdButton, dimensions, mystream;
function init(){
   vgaButton = document.querySelector('#vga');
   qvgaButton = document.querySelector('#qvga');
   hdButton = document.querySelector('#hd');
   dimensions = document.querySelector('#dimensions'); 
   video = document.getElementById("liveVideo")

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
   video.srcObject = stream;
   video.play();
   window.mystream = stream;
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
    let canvas = document.getElementById("myshot")
    let ctx = canvas.getContext("2d")
    ctx.drawImage(video,0,0,canvas.width,canvas.height)
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
    width: { min: 1280 },
    height: { min: 720 }
  }
};
