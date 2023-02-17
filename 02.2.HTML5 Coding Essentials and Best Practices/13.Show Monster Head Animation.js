const buttons1 = document.getElementById("buttons1")
console.log(buttons1)
const buttons2 = document.getElementById("buttons2")
const buttons3 = document.getElementById("buttons3")
let requestId
buttons1.addEventListener("mouseenter", () => {
    const canvas = document.getElementById("canvasElem1")
    const context = canvas.getContext("2d")
    const startBtn = document.getElementById("start1")
    const stopBtn = document.getElementById("stop1")
    let monsterX = 100, monsterY = 100, monsterAngle = 0
    startBtn.addEventListener("click", start)
    stopBtn.addEventListener("click", stop)

    function start(){
        requestId = setInterval(animationLoop, 20)
        startBtn.disabled = true
        stopBtn.disabled = false
    }
    function stop(){
        if(requestId)
            clearInterval(requestId)
        startBtn.disabled = false
        stopBtn.disabled = true
    }
    function animationLoop() {
        // 1 - Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // 2 Draw the monster using variables for pos, angle, etc.
        drawMonster(context,monsterX, monsterY, monsterAngle, 'silver', 'gold');
        // 3 Move the monster (change pos, angle, size, etc.)
        monsterX += 10;
        monsterX %= canvas.width
        monsterAngle += 0.01;
    }
})

buttons2.addEventListener("mouseenter", () => {
    const canvas = document.getElementById("canvasElem2")
    const context = canvas.getContext("2d")
    const startBtn = document.getElementById("start2")
    const stopBtn = document.getElementById("stop2")
    let monsterX = 100, monsterY = 100, monsterAngle = 0
    startBtn.addEventListener("click", start)
    stopBtn.addEventListener("click", stop)

    function start(){
        requestId = setTimeout(animationLoop, 20)
        startBtn.disabled = true
        stopBtn.disabled = false
    }
    function stop(){
        if(requestId)
            clearTimeout(requestId)
        startBtn.disabled = false
        stopBtn.disabled = true
    }
    function animationLoop() {
        // 1 - Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // 2 Draw the monster using variables for pos, angle, etc.
        drawMonster(context,monsterX, monsterY, monsterAngle, 'green', 'yellow');
        // 3 Move the monster (change pos, angle, size, etc.)
        monsterX += 10;
        monsterX %= canvas.width
        monsterAngle += 0.01;
        requestId = setTimeout(animationLoop, 20)
    }
})

buttons3.addEventListener("mouseenter", () =>{
    const canvas = document.getElementById("canvasElem")
    const context = canvas.getContext("2d")
    const startBtn = document.getElementById("start3")
    const stopBtn = document.getElementById("stop3")
    let monsterX = 100, monsterY = 100, monsterAngle = 0
    startBtn.addEventListener("click", start)
    stopBtn.addEventListener("click", stop)

    function start(){
        requestId = requestAnimationFrame(animationLoop)
        startBtn.disabled = true
        stopBtn.disabled = false
    }
    function stop(){
        if(requestId)
            cancelAnimationFrame(requestId)
        startBtn.disabled = false
        stopBtn.disabled = true
    }
    function animationLoop() {
        // 1 - Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // 2 Draw the monster using variables for pos, angle, etc.
        drawMonster(context,monsterX, monsterY, monsterAngle, 'green', 'yellow');
        // 3 Move the monster (change pos, angle, size, etc.)
        monsterX += 10;
        monsterX %= canvas.width
        monsterAngle += 0.01;
        requestId = requestAnimationFrame(animationLoop)
    }
})
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