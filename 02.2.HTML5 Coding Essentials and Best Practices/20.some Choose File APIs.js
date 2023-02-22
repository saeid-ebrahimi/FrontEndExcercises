const thumbnailsDiv = document.getElementById("thumbnails");
const imageschooserElem = document.getElementById("files1")
imageschooserElem.addEventListener("change",readImagesAndPreview,false)

const textsChooserElem = document.getElementById("files2")
textsChooserElem.addEventListener("change", readFileAnsDisplayAsText,false)
function readImagesAndPreview(evt) {
    let files = evt.target.files
    for (let file of files) {
        let reader = new FileReader()
        reader.onload = function (evt) {
            let container = document.createElement("div")
            let image = document.createElement("img")
            image.src = evt.target.result
            image.width = 150
            let namePar = document.createElement("p")
            namePar.innerText = file.name
            let sizePar = document.createElement("p")
            sizePar.innerText = parseInt(file.size / 100) + "KB"
            let typePar = document.createElement("p")
            typePar.innerText = file.type
            container.appendChild(image)
            container.appendChild(namePar)
            container.appendChild(sizePar)
            container.appendChild(typePar)
            container.style.display = "inline-block"
            thumbnailsDiv.appendChild(container)
        }

        reader.readAsDataURL(file)
    }
}

function readFileAnsDisplayAsText(evt){
    const filesContent = document.getElementById("filesContent");
    let files = evt.target.files
    filesContent.value = ""
    for (let file of files){
        let reader = new FileReader()
        addOnLoadListener(reader, file.name)
        reader.readAsText(file)
    }
    function addOnLoadListener(reader, name){
        reader.onload = (evt) => {
            filesContent.value += `\n##### READING FILE ${name} ######\n`
            filesContent.value += evt.target.result
        }
    }
}
const musicChooseElem = document.getElementById("files3")
const songElem = document.getElementById("song1")
const context = new window.AudioContext()
let source = null
let audioBuffer = null
musicChooseElem.addEventListener("change", function(evt){
    const reader = new FileReader()
    reader.onload = function(e){
        initSound(e.target.result)
        songElem.src = e.target.result
        console.log(e.target.result)
    }
    reader.readAsArrayBuffer(this.files[0])
}, false)
function stopSound(){
    if (source)
        source.stop()
}

function playSound(){

    source = context.createBufferSource()
    source.buffer = audioBuffer
    source.loop = false
    source.connect(context.destination)
    source.start(0)
}

function initSound(audioFile){
    context.decodeAudioData(audioFile, function (buffer){
        audioBuffer= buffer

        const buttons = document.querySelectorAll("button")
        buttons[0].disabled = false;
        buttons[1].disabled = false;
    }, function (e) {
        console.log('Error decoding file', e);
    })
}