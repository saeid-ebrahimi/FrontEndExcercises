let bufferLoader;
let ctx;

let listOfSoundSamplesURLs = [
    'https://mainline.i3s.unice.fr/mooc/shoot1.mp3',
    'https://mainline.i3s.unice.fr/mooc/shoot2.mp3'
];

window.onload = function init() {
    ctx = new AudioContext();
    loadAllSoundSamples();
}

function playSampleNormal(buffer) {
    let bufferSource = ctx.createBufferSource();
    bufferSource.buffer = buffer;
    bufferSource.connect(ctx.destination);
    bufferSource.start();
}

function makeSource(buffer) {
    // build graph source -> gain -> compressor -> speakers
    let source = ctx.createBufferSource();
    let compressor = ctx.createDynamicsCompressor();
    let gain = ctx.createGain();
    gain.gain.value = 0.2 + Math.random();
    source.buffer = buffer;
    source.connect(gain);
    gain.connect(compressor);
    compressor.connect(ctx.destination);
    return source;
}

function playSampleRepeated(buffer, rounds, interval, random, random2) {
    if (typeof random == 'undefined') {
        random = 0;
    }
    if (typeof random2 == 'undefined') {
        random2 = 0;
    }

    let time = ctx.currentTime;
    // Make multiple sources using the same buffer and play in quick succession.
    for (let i = 0; i < rounds; i++) {
        let source = makeSource(buffer);
        source.playbackRate.value = 1 + Math.random() * random2;
        source.start(time + i * interval + Math.random() * random);
    }
}

function onSamplesDecoded(buffers) {
    console.log("all samples loaded and decoded");

    shot1Normal.onclick = (evt) => {
        playSampleNormal(buffers[0]);
    };

    shot2Normal.onclick = (evt) => {
        playSampleNormal(buffers[1]);
    };
    shot1Repeated.onclick = (evt) => {
        playSampleRepeated(buffers[0], 3, 0.1);
    };

    shot2Repeated.onclick = (evt) => {
        playSampleRepeated(buffers[1], 10, 0.2);
    };

    shot1RepeatedIntervalRandom.onclick = (evt) => {
        playSampleRepeated(buffers[0], 10, 0.08, 0.05);
    };

    shot2RepeatedPitchAndIntervalRandom.onclick = (evt) => {
        playSampleRepeated(buffers[1], 10, 0.08, 1, 1);
    };

}

function loadAllSoundSamples() {

    bufferLoader = new BufferLoader(
        ctx,
        listOfSoundSamplesURLs,   // urls of all sound samples to load
        onSamplesDecoded          // called when all samples have been loaded and decoded
    );

    bufferLoader.load();              // start loading. Will call onSamplesDecoded once all files loaded and decoded
}

/* ############################
    BUFFER LOADER for loading multiple files asyncrhonously. The callback functions is called when all
    files have been loaded and decoded 
 ############################## */
function BufferLoader(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.callback = callback;
    this.bufferList = [];
    this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function (url, index) {
    // Load buffer asynchronously
    console.log('file : ' + url + "loading and decoding");

    let request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.responseType = "arraybuffer";

    let loader = this;

    request.onload = function () {

        // Asynchronously decode the audio file data in request.response
        loader.context.decodeAudioData(
            request.response,
            function (buffer) {
                console.log("Loaded and decoded track " + (loader.loadCount + 1) +
                    "/" + loader.urlList.length + "...");

                if (!buffer) {
                    alert('error decoding file data: ' + url);
                    return;
                }
                loader.bufferList[index] = buffer;

                //console.log("In bufferLoader.onload bufferList size is " + loader.bufferList.length + " index =" + index);
                if (++loader.loadCount == loader.urlList.length)
                    // call the callback and pass it the decoded buffers, we've finihed
                    loader.callback(loader.bufferList);
            },
            function (error) {
                console.error('decodeAudioData error', error);
            }
        );
    };

    request.onprogress = (e) => {
        if (e.total !== 0) {
            let percent = (e.loaded * 100) / e.total;

            console.log("loaded " + percent + " % of song " + index);
        }
    };

    request.onerror = function () {
        alert('BufferLoader: XHR error');
    };

    request.send();
};
//noprotect
BufferLoader.prototype.load = function () {
    console.log("Loading " + this.urlList.length + "track(s)... please wait...");
    for (let i = 0; i < this.urlList.length; ++i)
        this.loadBuffer(this.urlList[i], i);
};
