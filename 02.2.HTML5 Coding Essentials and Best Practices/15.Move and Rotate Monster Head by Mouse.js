const canvas = document.getElementById("myCanvas")
const context = canvas.getContext("2d")
let monsterX = 100, monsterY = 100, monsterAngle = 0
let incrementAngle = 0
let mousePos
let requestId

canvas.addEventListener("mousemove",handleMouseMove, false)

canvas.addEventListener("mousedown", handleMouseDown, false)

canvas.addEventListener("mouseup", handleMouseup, false)

requestId = requestAnimationFrame(animationLoop)

function handleMouseMove(event){
    mousePos = getMousePos(canvas, event)
}
function handleMouseDown()
{
    incrementAngle = 0.1
}
function handleMouseup(){
    incrementAngle = 0
}

function getMousePos(canvas, event){
    let rect = canvas.getBoundingClientRect()
    return { x: event.clientX - rect.left,
    y: event.clientY - rect.top}
}
function animationLoop() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawMonster(monsterX, monsterY, monsterAngle, 'green', 'yellow');

    if (mousePos !== undefined) {
        monsterX = mousePos.x;
        monsterY = mousePos.y;
        monsterAngle += incrementAngle;
    }

    // call again mainloop after 16.6 ms (60 frames/s)
    requestId = requestAnimationFrame(animationLoop);
}
function drawMonster(x, y, angle, headColor, eyeColor) {
    // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
    context.save();

    // Moves the coordinate system so that the monster is drawn
    // at position (x, y)
    context.translate(x, y);
    context.rotate(angle)
    // translate in Y -(width of monster/2), and in Y -(height of monster/2)
    // in order to rotate around the monster center instead of its top left
    // corner. Try to comment the next line
    // and click to rotate the monster!
    context.translate(-100, -100);

    // head
    context.fillStyle = headColor;
    context.fillRect(0, 0, 100, 100);

    // eyes
    context.fillStyle = 'red';
    context.fillRect(17, 15, 10, 10);
    context.fillRect(70, 15, 10, 10);

    // interior of eye
    context.fillStyle = eyeColor;
    context.fillRect(19, 17, 5, 5);
    context.fillRect(72, 17, 5, 5);

    // Nose
    context.fillStyle = 'black';
    context.fillRect(45, 35, 8, 30);

    // Mouth
    context.fillStyle = 'purple';
    context.fillRect(30, 80, 40, 5);

    // GOOD PRACTICE !
    context.restore();
}