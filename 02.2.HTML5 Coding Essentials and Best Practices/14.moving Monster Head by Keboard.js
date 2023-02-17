
const canvas = document.getElementById("canvasElem1")
const context = canvas.getContext("2d")
let monsterX = 100, monsterY = 100, monsterAngle = 0
let incrementX = 0, increamentY = 0

canvas.addEventListener('keydown', handleKeyDown, false)
canvas.addEventListener("keyup", handleKeyUp, false)
canvas.addEventListener("mouseenter", setFocus, false)
canvas.addEventListener("mouseout", unsetFocus, false)
requestId = requestAnimationFrame(animationLoop)

function setFocus(evt) {
    canvas.focus();
};


function unsetFocus(evt) {
    canvas.blur();
    incrementX = 0; // I added this line
};
function animationLoop() {
    // 1 - Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // 2 Draw the monster using variables for pos, angle, etc.
    drawMonster(context,monsterX, monsterY, monsterAngle, 'green', 'yellow');
    // 3 Move the monster (change pos, angle, size, etc.)
    monsterX += incrementX;
    monsterY += increamentY
    monsterX %= canvas.width
    monsterY %= canvas.height

    requestId = requestAnimationFrame(animationLoop)
}

function handleKeyDown(evt){
    console.log(evt.keyCode)
    if(evt.keyCode === 37)
        incrementX = -1
    else if (evt.keyCode === 38)
        increamentY = -1
    else if (evt.keyCode === 39)
        incrementX = 1
    else if (evt.keyCode === 40)
        increamentY = 1
}
function handleKeyUp(){
    increamentY = 0
    incrementX = 0
}
function drawMonster(ctx,x, y, angle, headColor, eyeColor){
    ctx.save();

    // Moves the coordinate system so that the monster is drawn
    // at position (x, y)
    ctx.translate(x, y);
    ctx.rotate(angle)

    // head
    ctx.fillStyle = headColor;
    ctx.fillRect(0, 0, 200, 200);

    // eyes
    ctx.fillStyle = 'red';
    ctx.fillRect(35, 30, 20, 20);
    ctx.fillRect(140, 30, 20, 20);

    // interior of eye
    ctx.fillStyle = eyeColor;
    ctx.fillRect(43, 37, 10, 10);
    ctx.fillRect(143, 37, 10, 10);

    // Nose
    ctx.fillStyle = 'black';
    ctx.fillRect(90, 70, 20, 80);

    // Mouth
    ctx.fillStyle = 'purple';
    ctx.fillRect(60, 165, 80, 20);

    // GOOD PRACTICE !
    ctx.restore();
}
function start() {
    // Start the animation loop, targets 60 frames/s
    requestId = requestAnimationFrame(animationLoop);
}
function stop() {
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
}