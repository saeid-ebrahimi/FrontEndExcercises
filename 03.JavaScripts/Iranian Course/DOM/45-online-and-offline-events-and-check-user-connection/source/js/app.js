// DOM => Document Object Model
// BOM => Browser Object Model

let h1Elem = document.querySelector('h1')

window.addEventListener('online', function () {
    h1Elem.innerHTML = 'On Line'
    h1Elem.className = 'online'
    
    console.log('On Line');
})

window.addEventListener('offline', function () {
    h1Elem.innerHTML = 'Off Line'
    h1Elem.className = 'offline'

    console.log('Off Line');
})