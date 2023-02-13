(function(){
    
    let zoom = 1
    let rotate = 0
    let top1 = 0
    let left1 = 0
    let $ = document
    let stage = $.getElementById("stage")
    let video1 = document.getElementsByTagName('video')[0]
    let controls = document.getElementById('controls')

    let properties = [
        'transform', 'WebkitTransform',
        'MozTransform',
        'msTransform', 'OTransform'
    ]
    let prop = properties[0]
    for (let supportedProp of properties){
        if (typeof stage.style[supportedProp] !== 'undefined')
            {
                prop = supportedProp
                break
            }
    }
    video1.style.left = "0px"
    video1.style.top = "0px"
    
    /* If there is a controls element, add the player buttons */
    if(controls){
        controls.innerHTML= 
         '<button class="play">play</button>'+
            '<div id="change">' +
                '<button class="zoomin">+</button>' +
                '<button class="zoomout">-</button>' +
                '<button class="left">⇠</button>' +
                '<button class="right">⇢</button>' +
                '<button class="up">⇡</button>' +
                '<button class="down">⇣</button>' +
                '<button class="rotateleft">&#x21bb;</button>' +
                '<button class="rotateright">&#x21ba;</button>' +
                '<button class="reset">reset</button>' +
            '</div>'
    }
    controls.addEventListener('click',function(evt){
        target = evt.target
        if(target.nodeName.toLowerCase() === "button"){
            switch(target.className){
                case 'play':
                    if( video1.paused){
                        video1.play()
                        target.innerHTML = 'pause'
                    }
                    else{
                        video1.pause()
                        target.innerHTML = 'play'
                    }
                    break
                case 'zoomin':
                    zoom += 0.1
                    break
                case 'zoomout':
                    zoom -= 0.1
                    break
                case 'rotateleft':
                    rotate += 5
                    break
                case 'rotateright':
                    rotate -= 5
                    break
                case 'left':
                    left1 -= 5
                    break
                case 'right':
                    left1 += 5
                    break
                case 'up':
                    top1 -= 5
                    break
                case 'down':
                    top1 += 5
                    break
                case 'reset':
                    zoom = 1
                    rotate = 0
                    top1 = 0
                    left1 = 0
                    break

            }
            video1.style[prop] = `scale(${zoom}) rotate(${rotate}deg)`
            video1.style.top = top1 + "px"
            video1.style.left = left1 + "px"
            evt.preventDefault()
        }
    },false)
})()