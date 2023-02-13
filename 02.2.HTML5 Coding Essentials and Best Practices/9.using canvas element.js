const canvas = document.getElementById("myCanvas")
const context = canvas.getContext('2d')
const width = 100
const height = 80
const center = {
    x:(canvas.width - width) / 2 ,
    y:(canvas.height - height)/2}
function drawRect(){
    context.save()
    context.strokeStyle = "#0000ff"
    context.lineWidth = 6
    context.strokeRect(center.x,center.y,width,height)
    context.restore()
}
function drawSomeRect(){
    context.save()
    context.fillStyle = "lightgreen"
    context.fillRect(0,center.y,100,200);
    context.fillRect(150,center.y,100,200);
    context.fillRect(300,center.y,100,200);
    context.save()
}
function translateCoords(x,y){
    context.clearRect(-15,-15,215,215)
    context.translate(x,y)
    drawMonster(0,0)
}
function scaleContext(amt){
    context.scale(amt,amt)
    drawMonster(0,0)
}
function drawImageTag(){
    let imageObj = document.getElementById("logo")
    context.drawImage(imageObj, 0, 10, 100, 100);
        // with size = 150x150
        context.drawImage(imageObj, 80, 10, 150, 150);
        // with size = 200x200
        context.drawImage(imageObj, 210, 10, 200, 200);

        // draw the sub image at 0, 0, width = 512, height = 100
        // at position 100, 250, with a width of 256 and a height of 50
        context.drawImage(imageObj, 0, 0, 512, 100, 100, 250, 256, 50);
}
function drawImage(){
    let imageObj = new Image()
    imageObj.onload = () => {
        context.drawImage(imageObj, 20, 20,400,400)
        // draw the sub image at 0, 0, width = 512, height = 100
        // at position 100, 250, with a width of 256 and a height of 50
        //context.drawImage(imageObj, 10, 0, 512, 120, 100, 250, 256, 50);
    }
    imageObj.src = "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
}
function drawText(){
    context.save()
    context.font = "italic bold 30pt Arial"
    context.fillStyle = "darkgreen"
    context.textAlign = "left" // center or right, 
    let text = "Welcome to intro to convas"
    let textWidth = context.measureText(text).width
    context.fillText(text,10,100,textWidth)
    
    context.strokeStyle = "darkblue"
    context.strokeText("this is an intro to text stroke",100,150,300)
    
    // text align test
    context.stokeStyle = "#000000";
    context.lineWidth  = 1;
    context.beginPath();
    context.moveTo( 250, 200);
    context.lineTo( 250, 330);
    context.stroke();
    context.closePath();

    context.font      = "16px Verdana";
    context.fillStyle = "#000000";

    context.textAlign = "center";
    context.fillText("center", 250, 220);

    context.textAlign = "start";
    context.fillText("start", 250, 240);

    context.textAlign = "end";
    context.fillText("end", 250, 260);

    context.textAlign = "left";
    context.fillText("left", 250, 280);

    context.textAlign = "right";
    context.fillText("right", 250, 300);

    context.restore()
}
function rotateContext(deg){
    context.rotate(Math.PI*deg/180)
    drawMonster(0,0)
    
}
function drawMonster(x, y)
        {
            context.save()
            context.fillStyle="lightgreen";
            context.fillRect(x,y,200,200);

            //eyes
            context.fillStyle = 'red';
            context.fillRect(x+35,y+30,20,20);
            context.fillRect(x+140,y+30,20,20);

            // interior of eye
             context.fillStyle='yellow';
             context.fillRect(x+43,y+37,10,10);
             context.fillRect(x+143,y+37,10,10);

             // Nose
            context.fillStyle = 'black';
            context.fillRect(x+90,y+70,20,80);

            // Mouth
            context.fillStyle='purple';
            context.fillRect(x+60,y+165,80,20);
            drawArrow(context, 0, 0, 100, 0, 10, 'red');
            drawArrow(context, 0, 0, 0, 100, 10, 'red');
            context.restore()
        }
function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color){
    var headlen = 10 ;
    var angle = Math.atan(toy - fromy);

    ctx.save();
    ctx.strokeStyle = color;

    //starting path of the arrow from the start square to the end square and drawing the stroke
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineWidth = arrowWidth;
    ctx.stroke();
    //starting a new path from the head of the arrow to one of the sides of the point
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

    //path from the side point of the arrow, to the other side point
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));

    //path from the side point back to the tip of the arrow, and then again to the opposite side point
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

    //draws the paths created above
    ctx.stroke();
    ctx.restore();
}