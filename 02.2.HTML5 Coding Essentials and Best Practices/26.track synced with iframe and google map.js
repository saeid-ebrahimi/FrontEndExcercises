window.onload = function (){
    const videoElem = document.querySelector("#myVideo")
    const myIFrame = document.querySelector("#myIframe")
    const currentURLSpan = document.querySelector("#currentURL")

    const textTracks = videoElem.textTracks
    const textTrack = textTracks[0]
    
    textTrack.mode = "hidden"
    const centerPos = new google.maps.LatLng(48.579400, 7.7519)
    const optionGmaps = {
        center:centerPos,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId : google.maps.MapTypeId.ROADMAP,
        zoom: 15
    }
    const map = new google.maps.Map(document.getElementById("map"),optionGmaps)

    textTrack.oncuechange = function(){
        const cue = this.activeCues[0]
        if(cue===undefined) return
        const cueContentJSON = JSON.parse(cue.text)
        switch(cueContentJSON.type){
            case 'WikipediaPage':
                const myURL = cueContentJSON.url
                const myLink = "<a href=\"" + myURL + "\">" + myURL + "</a>";
                currentURLSpan.innerHTML = myLink
                myIFrame.src = myURL
                break
            case "LongLat":
                drawPosition(cueContentJSON.long, cueContentJSON.lat)
        }
    }
    function drawPosition(long, lat){
        const latlng = new google.maps.latlng(lat, long)
        const marker = new google.maps.Marker({
            position: latlng,
            map:map,
            title: "you are here"
        })
        map.panTo(latlng)
    }
}
function initMap(){
    console.log("map loaded")
}