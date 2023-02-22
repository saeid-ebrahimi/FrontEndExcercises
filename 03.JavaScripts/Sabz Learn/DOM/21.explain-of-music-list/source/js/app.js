const $ = document
const players = $.querySelectorAll(".fa-play")
const audious = $.querySelectorAll("audio")
$.onclick =
console.log(audious)
players.forEach(player => {
    player.addEventListener("click",function(event){
        console.log("clicked")
        let musicName = event.target.dataset.name
        audious.forEach(audio =>{
            if (audio.dataset.name === musicName){
                audio.currentTime = 0
                audio.play()
            }else{
                audio.pause()
                
            }
        })
    })
});