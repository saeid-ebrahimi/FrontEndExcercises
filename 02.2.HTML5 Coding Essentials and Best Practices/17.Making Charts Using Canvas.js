//context.fillRect(0,0,100,100)
let width=150 , height=150
let histX=40,histY=190
let pieX=300 , pieY = 100, pieRadius = 90
let linesX = 40, linesY=370
const values = [1, 10, 3, 7, 9, 2, 34, 100, 12, 14, 19]

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const list = document.getElementById("sliders")
let max = getMax(values)

for (let i =0; i < values.length; i++){
    const input = document.createElement("input")
    const li = document.createElement("li")
    const label = document.createElement("label")
    label.setAttribute("for", "id"+i)
    label.textContent = "amount #" + i + " "
    
    input.setAttribute("type", "range")
    input.setAttribute("id", "id"+i)
    input.setAttribute("max", max)
    input.value = values[i]

    input.setAttribute("oninput", "changeValue(" + i + ")")
    li.appendChild(label)
    li.appendChild(input)
    
    list.appendChild(li)

}
makeHistogram(histX, histY, width, height, values)
makePieChart(pieX, pieY, pieRadius, values)
makeBrokenLines(linesX, linesY, width, height, values)

function changeValue(index){
    const value = document.getElementById("id"+index).value
    values[parseInt(index)] = parseInt(value)
    context.clearRect(0, 0, canvas.width, canvas.height)
    makeHistogram(histX, histY, width, height, values)
    makePieChart(pieX, pieY, pieRadius, values)
    makeBrokenLines(linesX, linesY, width, height, values)
}
function getMax(values){
    let max1= 0
    for (let i=0; i < values.length; i++){
        if(max1 < values[i])
            max1 = values[i]
    }
    return max1
}

function drawAxis(width, height, values, maxValue){
    context.strokeStyle = "black"
    context.fillStyle = "black"
    
    let unit = 1
    while (maxValue / (unit*10) > 1)
        unit *= 10
    let yMaxOnAxis = parseInt(maxValue) / unit

    context.beginPath()

    context.moveTo(0,0)
    context.lineTo(0, -height)
    context.moveTo(0, 0)
    context.lineTo(width, 0)

    context.textAlign = "left"
    for(let i =0; i<= yMaxOnAxis; i++){
        context.moveTo(0, -height / yMaxOnAxis *i)
        context.lineTo(-5, -height/yMaxOnAxis *i)
        context.fillText(i*unit, -25, -height / yMaxOnAxis *i)
    }
    let counter = 0

    context.textAlign = "center"
    let rectangleWidth = width/ values.length
    for (let i=0; i <= values.length; i++){
        context.moveTo(i*rectangleWidth, 0)
        context.lineTo(i*rectangleWidth, 5)
        context.fillText(i, i*rectangleWidth, 15)
    }
    context.stroke()
}

function makeHistogram(x, y, width, height, values){
    context.save()
    context.translate(x, y)
    let maxValue= getMax(values)
    let rectWidth = width / parseFloat(values.length)
    let vStep = -height / parseFloat(maxValue)
    context.fillStyle = "lightBlue"
    context.strokeStyle = "black"
    for (let i =0; i < values.length; i++){
        context.fillRect(i * rectWidth, 0, rectWidth, vStep*values[i])
        context.strokeRect(i* rectWidth, 0, rectWidth, vStep*values[i])
    }
    drawAxis(width, height, values, maxValue)
    context.restore()
}

function makePieChart(cx, cy, radius, values)
{
    let sum =0 
    for(let n=0; n < values.length; n++)
        sum += values[n]

    let red =0
    let green= 0
    let blue = 0

    let startingAngle =0
    let endAngle 

    let percentage

    context.strokeStyle = "grey"
    for (let i = 0; i < values.length; i++){
        context.beginPath()
        switch (i%3){
            case 0:
                red += 70
                break
            case 1:
                green += 70
                break
            case 2: 
                blue += 70
                break
            default:
                alert("we have encountered an error")
                return
        }
        context.fillStyle = `rgb(${red},${green}, ${blue})`
        percentage = values[i]/parseFloat(sum)
        endAngle = startingAngle + Math.PI*2*percentage
        context.arc(cx, cy, radius, startingAngle, endAngle)
        context.lineTo(cx,cy)
        startingAngle = endAngle
        context.fill()
        context.stroke()
        context.closePath()
        context.restore()

    }
}

function makeBrokenLines(x, y, width, height, values){
    context.save()
    context.translate(x, y)
    let maxValue = getMax(values)
    let hStep = width / parseFloat(values.length)
    let vStep = -height / parseFloat(maxValue)

    context.fillStyle = "darkBlue"
    context.lineWidth = 2
    context.moveTo(0, 0)

    context.beginPath()
    for(let i=0; i < values.length; i++){
        context.lineTo(i*hStep, vStep*values[i])
    }
    context.stroke()
    for(let i=0; i < values.length; i++){
        context.beginPath(); 
        context.arc(i * hStep, vStep * values[i], 3, 0, 2*Math.PI); 
        context.fill(); //We fill all circles.
    }
    drawAxis(width, height, values, maxValue); 

    context.restore()
}