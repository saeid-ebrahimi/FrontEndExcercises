const canvas = document.getElementById("myCanvas")
const context = canvas.getContext("2d")

function clearCanvas(){
    context.beginPath()
    context.clearRect(0,0,canvas.width, canvas.height)
}
function drawGrid(){
    // vertical lines
    context.save()
    for(let x=0;x<=500;x += 10){
        context.moveTo(x,0)
        context.lineTo(x,500)
    }
    // horizental lines
    for(let y = 0;y<=500;y+= 10){
        context.moveTo(0,y)
        context.lineTo(500,y)
    }
    context.strokeStyle = "darkblue"
    context.stroke()
    context.restore()
}

function drawDiagnalLines(){
    context.save()
    for( let pos=0;pos < 500;pos+=10){
        context.strokeStyle = "darkblue"
        context.moveTo(pos, pos);
        //context.lineTo(pos+100, pos+100);
        context.lineTo(pos, 0);
        context.moveTo(pos, pos);
        context.lineTo(0,pos)
        
    }
    context.stroke();
    context.restore()
}
function drawTriangles(){
    context.save()
    // first part of the path
    context.moveTo(20, 20);
    context.lineTo(100, 100);
    context.lineTo(100, 0);
    context.lineTo(20,20)
    context.strokeStyle = "#0000FF";
    context.stroke();
    context.closePath()
    context.beginPath()
    context.moveTo(120,120)
    context.lineTo(200,200)
    context.lineTo(200,100)
    context.closePath()
    context.fillStyle = "pink"
    context.fill()
    context.restore()
}

function drawArrow(fromX,fromY,toX,toY,arrowThickness,color){
    let headlen = 10
    let angle = Math.atan2(toY-fromY,toX-fromX)
    context.save()
    context.strokeStyle = color

    //starting path of the arrow from the start square
    // to the end square and drawing the stroke
    context.beginPath()
    context.moveTo(fromX,fromY)
    context.lineTo(toX,toY)
    context.lineWidth = arrowThickness
    context.stroke()

    //starting a new path from the head of the arrow
    // to one of the sides of the point
    context.beginPath()
    context.moveTo(toX,toY)
    context.lineTo(toX - headlen*Math.cos(angle - Math.PI /7), 
        toY - headlen*Math.sin(angle - Math.PI/7))
    //path from the side point of the arrow, to the other side point
    context.lineTo(toX - headlen*Math.cos(angle + Math.PI /7), 
        toY - headlen*Math.sin(angle + Math.PI/7))
    //path from the side point back to the tip of the arrow, and then
    //again to the opposite side point
    context.lineTo(toX,toY)
    context.lineTo(toX - headlen*Math.cos(angle - Math.PI /7), 
        toY - headlen*Math.sin(angle - Math.PI/7))
    context.stroke()
    context.restore()

}

function drawArc(){
    context.save()

    context.lineWidth = 10
    context.beginPath()
    context.arc(100, 100, 50,Math.PI/3, Math.PI/2,true)
    context.stroke()

    context.beginPath()
    context.arc(100, 120, 50,Math.PI/3, Math.PI/2)
    context.stroke()

    context.restore()
}

function drawCircle(cx,cy,radius){
    context.save()
    context.beginPath()
    context.arc(cx, cy, radius, 0, 2*Math.PI)
    context.fillStyle = "blue"
    context.fill()
    context.lineWidth = 10
    context.strokeStyle = "darkred"
    context.closePath()
    context.stroke()
    context.restore()
}

function drawRoundedRectangle(x,y,width,height,radius,fill,stroke){
    context.save()
    context.beginPath()
    // to know more about arcTo follow below link
    // http://www.dbp-consulting.com/tutorials/canvas/CanvasArcTo.html
    // draw top and top right corner
    context.moveTo(x + radius, y)
    context.arcTo(x + width, y, x + width, y + radius, radius)
    
    // draw right side and bottom right corner
    context.arcTo(x + width, y + height,x + width - radius, y + height, radius)
    // draw bottom and bottom left corner
    context.arcTo(x, y + height, x, y + height - radius, radius)
    // draw left and top left corner
    context.arcTo(x, y, x + radius, y, radius)
    context.strokeStyle = 'rgb(150,0,0)'
    context.fillStyle = 'rgb(0,0,100)'
    context.lineWidth = 7
    if (fill) {
        context.fill()
    }
    if(stroke){
        context.stroke()
    }
    context.restore()
}

function drawRoundedTriangle(x1,y1,x2,y2,x3,y3,radius,fill,stroke){

    context.save()
    context.strokeStyle = 'rgb(150,0,0)'
    context.fillStyle = 'rgb(0,0,150)'
    context.lineWidth = 7
    context.beginPath()
    context.moveTo((x1+x2)/2, (y1+y2)/2)
    context.arcTo(x2,y2,x3,y3,radius)
    context.arcTo(x3,y3,x1,y1,radius)
    context.arcTo(x1,y1,x2,y2,radius)
    context.lineTo((x1+x2)/2, (y1+y2)/2)
    if(fill){
        context.fill()
    }
    if(stroke){
        context.fill()
    }
    context.restore()
}

function drawLineAndQuadratic(){
    context.save()
    context.beginPath()
    context.moveTo(100, 20)
    context.lineTo(200, 80)
    context.quadraticCurveTo(230, 200, 250, 30)
    context.lineTo(400, 90)
    context.lineWidth = 5;
    context.strokeStyle = "#ff00aa";
    context.stroke();
    context.restore()
}

function drawCurvedArrow(startPointX, startPointY,
    endPointX, endPointY,
    quadPointX, quadPointY,
    lineWidth, arrowWidth, color){
    context.save()
    context.beginPath()
    context.strokeStyle = color
    context.lineWidth = lineWidth

    let arrowAngle = Math.atan2(quadPointX - endPointX, 
        quadPointY - endPointY )+ Math.PI
    
    context.beginPath()
    context.moveTo(startPointX, startPointY)
    
    context.quadraticCurveTo(quadPointX,quadPointY,endPointX,endPointY)
    context.moveTo(endPointX - (arrowWidth * Math.sin(arrowAngle - Math.PI / 6)), 
                        endPointY - (arrowWidth * Math.cos(arrowAngle - Math.PI / 6)));
    context.lineTo(endPointX, endPointY)
    context.lineTo(endPointX - (arrowWidth * Math.sin(arrowAngle + Math.PI / 6)), 
                    endPointY - (arrowWidth * Math.cos(arrowAngle + Math.PI / 6)));
    context.stroke()
    context.closePath()
    context.restore()
}

function drawBezierAndQuadraticPath(){
    context.save()
    context.beginPath()
    context.moveTo(100, 20)
    context.lineTo(200, 160)
    context.quadraticCurveTo(230, 200, 250, 120);
    context.bezierCurveTo(290, -30, 300, 200, 400, 150)
    context.lineTo(490, 90);
    context.closePath()

    context.lineWidth = 5
    context.strokeStyle = 'rgba(0, 0, 255, 0.3)'
    context.stroke()
    context.restore()
}
function drawGradientRect(){
    context.save()
    context.beginPath()
    const grdFrenchFlag = context.createLinearGradient(50, 50, 300, 200)
    grdFrenchFlag.addColorStop(0.2,"purple")
    grdFrenchFlag.addColorStop(0.65, "green")
    grdFrenchFlag.addColorStop(1, "blue")
    context.fillStyle = grdFrenchFlag;
    context.fillRect(50, 50, 300, 200);
    context.restore()
}
function drawGradientChessBoard(n){
    context.save()
    context.beginPath()
    const width = canvas.width
    const height = canvas.height
    grdFrenchFlag = context.createLinearGradient(0, 0, width, height)
    grdFrenchFlag.addColorStop(0, "blue"); 
    grdFrenchFlag.addColorStop(0.5, "white");
    grdFrenchFlag.addColorStop(1, "red");
    context.fillStyle = grdFrenchFlag 

    const cellWidth = width / n
    const cellHeight = height / n
    for(let y=0; y<n; y++){
        for(let x= y % 2; x<n; x+= 2){
            context.fillRect(cellWidth*y,cellHeight*x,cellWidth,cellHeight)
        }
        
    }
    context.restore()
}
function drawGradientCheckBoard(n){
    context.save()
    context.beginPath()
    const width = canvas.width
    const height = canvas.height
    context.lineWidth = 100 / n
    grdFrenchFlag = context.createLinearGradient(0, 0, width, height)
    grdFrenchFlag.addColorStop(0, "blue"); 
    grdFrenchFlag.addColorStop(0.5, "white");
    grdFrenchFlag.addColorStop(1, "red");
    context.strokeStyle = grdFrenchFlag 

    const cellWidth = width / n
    const cellHeight = height / n
    for(let y=0; y<n; y++){
        for(let x= y % 2; x<n; x+= 2){
            context.strokeRect(cellWidth*y,cellHeight*x,cellWidth,cellHeight)
        }
        
    }
    context.restore()
}
function drawGradientCellChessBoard(n){
    context.save()
    context.beginPath()
    const width = canvas.width
    const height = canvas.height

    const cellWidth = width / n
    const cellHeight = height / n
    for(let i=0; i<n; i += 2){
        for(let j = 0; j<n; j++){
            const x = cellWidth * (i + j % 2);
            const y = cellHeight * j;
            setGradient(x,y,x+cellWidth,y+cellHeight)
            context.fillRect(x,y,cellWidth,cellHeight)
        }
        
    }
    context.restore()

    function setGradient(x,y,width,height){
        const grdFrenchFlag = context.createLinearGradient(x,y,width,height)
        grdFrenchFlag.addColorStop(0, "blue");
        grdFrenchFlag.addColorStop(0.55, "silver");
        grdFrenchFlag.addColorStop(1, "red");
        context.fillStyle = grdFrenchFlag;
    }
}

function drawRadialGradients(){
    context.save()
    context.beginPath()
    grad1 = context.createRadialGradient(150, 100, 40, 150, 100, 100)
    grad1.addColorStop(0, "red")
    grad1.addColorStop(0.17, "orange")
    grad1.addColorStop(.33, "yellow")
    grad1.addColorStop(.5, "green")
    grad1.addColorStop(0.666, "blue")
    grad1.addColorStop(1, "silver")
    context.fillStyle = grad1
    context.fillRect(9, 9, 300, 200)
    
    grad2 = context.createRadialGradient(100, 300, 30, 150, 330, 100);
    grad2.addColorStop(0, "red")
    grad2.addColorStop(0.17, "orange")
    grad2.addColorStop(.33, "yellow")
    grad2.addColorStop(.5, "green")
    grad2.addColorStop(0.666, "blue")
    grad2.addColorStop(1, "silver")
    context.fillStyle = grad2
    context.fillRect(9,209,300,400)
    context.restore()
}

function drawPatterns(){
    context.save()
    let imageObj = new Image()
    imageObj.onload = function(){
        const pattern1 = context.createPattern(imageObj,"repeat")
        context.fillStyle = pattern1
        context.fillRect(20, 20, 300, 180)
        context.lineWidth=50
        context.strokeStyle=pattern1
        context.strokeRect(30, 200, 150, 250)
    }
    imageObj.src = "birds.jpg"
    context.restore()
}

function drawMultiplePattern(){
    context.save()
    const imagesToLoad = {
        flowers: "https://i.ibb.co/4NN9Sgn/flowers.jpg",
        lion: "https://i.ibb.co/3NyqKnY/lion.jpg",
        blackAndWhitelys: "https://i.ibb.co/VNLVpcL/final.jpg",
        tiledFloor:"https://i.ibb.co/Dt6txmG/repeatable-Pattern.jpg"
    }
    
    loadImages(imagesToLoad, (imagesLoaded) =>{
        const patternFlowers = context.createPattern(imagesLoaded.flowers, 'repeat')
        const patternLion = context.createPattern(imagesLoaded.lion, 'repeat')
        const patternBW = context.createPattern(imagesLoaded.blackAndWhitelys, "repeat")
        const patternFloor = context.createPattern(imagesLoaded.tiledFloor, "repeat")
        
        context.fillStyle=patternFloor;
        context.fillRect(0,0,200,200);

        context.fillStyle=patternLion;
        context.fillRect(200,0,200,200);

        context.fillStyle=patternFlowers;
        context.fillRect(0,200,200,200);

        context.fillStyle=patternBW;
        context.fillRect(200,200,200,200);
    })
    context.restore()

    function loadImages(imagesToBeLoaded, drawCallback){
        const imagesLoaded = {}
        let loadedImages = 0
        let numberOfImagesToLoad = 0
        
        for(let name in imagesToBeLoaded){
            numberOfImagesToLoad++
        }
        for(let name in imagesToBeLoaded){
            imagesLoaded[name] = new Image()
            imagesLoaded[name].onload = function(){
                if(++loadedImages >= numberOfImagesToLoad)
                    drawCallback(imagesLoaded)
            }
            imagesLoaded[name].src = imagesToBeLoaded[name]
        }
    }
}

function drawShadow(){
    context.save()
    setShadow()
    context.fillStyle = "#22ffdd"
    context.fillRect(20, 20, 200, 100)

    context.strokeStyle = "purple"
    context.lineWidth = 15
    context.strokeRect(20, 150, 200, 100)
    context.restore()

    function setShadow(){
        context.shadowColor = "gray"
        context.shadowBlur = 20
        context.shadowOffsetX = -18
        context.shadowOffsetY = 15
    }
}

function drawCircleShadow(){
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 80
    context.beginPath()
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)

    context.fillStyle = "lightBlue"
    context.save()

    addShadows()
    context.fill()

    context.restore()

    context.lineWidth = 10
    context.strokeStyle = "black"

    context.stroke()

    function addShadows(){
        context.shadowColor = "gray"
        context.shadowBlur = 5;
        context.shadowOffsetX = 15;
        context.shadowOffsetY = 15;
    }
}

function changeLineCapAndJoin(){
    context.save()
    context.beginPath()
    context.moveTo(20,20);
    context.lineTo(100,100);
    context.lineTo(100, 30);
    context.moveTo(120, 20);
    context.lineTo(200, 100);
    context.lineTo(200, 30);
    context.strokeStyle = "#0000FF";
    context.lineWidth = 20;
    context.lineCap = "round"
    //context.lineJoin = "bevel"
    context.lineJoin = "miter"
    context.miterLimit = 1
    //ctx.miterLimit = 2;
    //ctx.miterLimit = 3;
    context.stroke()
    context.strokeRect(230, 10, 100, 100)
    context.restore()
}