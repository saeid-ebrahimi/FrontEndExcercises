const widthInp = document.getElementById("canvasWidth")
const heightInp = document.getElementById("canvasHeight")
const resizeBtn = document.getElementById("resize")
const canvas = document.getElementById("canvas1")
const context = canvas.getContext("2d")
const thicknessInp = document.getElementById("thickness")
const pen = document.getElementById("pen1")
const brush = document.getElementById("brush1")
const canvasColorInp = document.getElementById("canvasColor")
const paintingColorInp = document.getElementById("paintingColor")
let previousMousePos
let painting = false

canvas.addEventListener('mousemove', handleMouseMove, false)
canvas.addEventListener("mouseleave",()=>{
    painting = false
}, false)
resizeBtn.addEventListener("click", ()=>{
    context.save()
    canvas.width =  widthInp.value
    canvas.height = heightInp.value
    context.fillStyle = canvasColorInp.value
    context.fillRect(0,0,canvas.width, canvas.height)
}, false)

canvasColorInp.addEventListener("change", ()=>{
    context.fillStyle = canvasColorInp.value
    context.fillRect(0,0,canvas.width, canvas.height)
}, false)
paintingColorInp.addEventListener("change", ()=>{
    context.strokeStyle = paintingColorInp.value
}, false)
canvas.addEventListener("mousedown", ()=>{
    painting= true
}, false)
canvas.addEventListener("mouseup", ()=>{
    painting= false
}, false)
pen.addEventListener("click", ()=>{
    context.lineWidth = 1
    thicknessInp.value = 1
},false)
brush.addEventListener("click", ()=>{
    context.lineWidth = 10
    thicknessInp.value = 10
},false)

thicknessInp.addEventListener("change", ()=>{
    context.lineWidth = thicknessInp.value
    console.log(context.lineWidth)
}, false)

function getMousePos(canvas, event){
    let rect = canvas.getBoundingClientRect()
    return { x: event.clientX - rect.left,
    y:event.clientY - rect.top}
}

function drawLineImmidiate(x1, y1, x2, y2){
    context.beginPath();
    //context.moveTo(0, 0);
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke(); 
}
function handleMouseMove(evt) {
    let mousePos = getMousePos(canvas, evt);

    // Let's draw some lines that follow the mouse pos
    if (!painting) {
        previousMousePos = mousePos;

    } else {
        drawLineImmidiate(previousMousePos.x, previousMousePos.y,
            mousePos.x, mousePos.y);

        previousMousePos = mousePos;
}
}