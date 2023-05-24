const copyButton = document.querySelector('#copy')
const pasteButton = document.querySelector('#paste')

copyButton.addEventListener("click" , () => {
    let copyText = "the desire copied content"

    if(window.navigator.clipboard){
        window.navigator.clipboard.writeText(copyText)

    }else{
        alert("your browser doesn't support clipboard, please use Chrome Browser!")
    }
})

pasteButton.addEventListener("click", () => {
    if(window.navigator.clipboard){
        window.navigator.clipboard.readText()
            .then(resp => console.log("Clipboard text: ",resp))
    }else{
        alert("your browser doesn't support clipboard, please use Chrome Browser!")
    }
})