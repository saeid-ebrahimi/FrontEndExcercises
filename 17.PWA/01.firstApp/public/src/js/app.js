var deferredPrompt;
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        // .register('/sw.js', { scope: '/help' })
        .then(function () {
            console.log("%c service worker registered!", "background:blue;color:white;padding:3px;");
        });
}
window.addEventListener('beforeinstallprompt', function (evt) {
    console.log("%c beforeinstallprompt fired", 'background:yellow;color:black;padding:5px;');
    evt.preventDefault();
    deferredPrompt = evt;
    return false
})
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("This is executed once the timer is done!")
        // console.log("This is executed once the timer is done!");
    }, 3000);
});

promise.then(function (text) {
    console.log(text);
})
console.log("This is executed right after setTimeout()");