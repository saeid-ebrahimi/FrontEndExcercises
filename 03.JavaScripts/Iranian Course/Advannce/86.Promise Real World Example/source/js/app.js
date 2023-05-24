const loadEternalFile = path => {
    return new Promise((resolve, reject) => {
        const linkTag = document.createElement("link")
        linkTag.rel = "stylesheet"
        linkTag.href = path

        linkTag.onload = () => resolve("File loaded successfully ;))")
        linkTag.onerror = () => reject("File not loaded :((")
        document.head.append(linkTag)
    })
}

//loadEternalFile('css/stylee.css')
loadEternalFile('css/style.css')
    .then((response) => {
        console.log(response)
        document.body.insertAdjacentHTML("afterbegin", `<h1 class="message">$CSS External{response}</h1>`)
    } )
    .catch(err => {
    console.log(err)
    })

