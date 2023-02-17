
const canvas = document.getElementById("canvasElem")
const context = canvas.getContext("2d")

function showAnimation1(){
    context.save()
    context.beginPath()
    let rectangleX = 0
    const colors = ["red", "blue", "green", "purple", "cyan", "magenta", "black"]
    let currentColor = 0
    let speed = 20

    setInterval(changeColor, 1000)
    setTimeout(animate, 100)
    context.restore()
    function animate(){
        context.clearRect(rectangleX - speed,100, 80, 100)
        context.fillRect(rectangleX,100, 80, 100)
        rectangleX += speed
        if (rectangleX + 80 >= canvas.width || rectangleX <= 0)
            speed *= -1
        setTimeout(animate, 100)   
    }
    function changeColor(){
        context.fillStyle = colors[currentColor % colors.length]
        currentColor++
        speed += Math.sign(speed);
    }
}

function showAnimation2(){
    context.save()
    context.beginPath()
    let rectangleX = 0
    const colors = ["red", "blue", "green", "purple", "cyan", "magenta", "black"]
    let currentColor = 0
    let speed = 20

    setInterval(changeColor, 1000)
    requestAnimationFrame(animate)
    context.restore()
    function animate(){
        context.clearRect(rectangleX - speed,100, 80, 100)
        context.fillRect(rectangleX,100, 80, 100)
        rectangleX += speed
        if (rectangleX + 80 >= canvas.width || rectangleX <= 0)
            speed *= -1
        requestAnimationFrame(animate)  
    }
    function changeColor(){
        context.fillStyle = colors[currentColor % colors.length]
        currentColor++
        speed += Math.sign(speed);
    }
}
