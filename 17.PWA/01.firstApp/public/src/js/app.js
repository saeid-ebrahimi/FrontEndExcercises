var deferredPrompt;
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        // .register('/sw.js', { scope: '/help' })
        .then(function () {
            console.log("%c service worker registered!", "background:blue;color:white;padding:3px;");
        }).catch(function (error) {
            console.warn(error)
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
        // resolve("This is executed once the timer is done!")
        reject({ code: 500, message: "An error occurred!" })
        // console.log("This is executed once the timer is done!");
    }, 3000);
});
// XHR is a synchronous  operation and service worker don't support it.
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://httpbin.org/ip");
// xhr.responseType = "json";
// xhr.onload = function () {
//     console.log(xhr.response);
// }
// xhr.onerror = function () {
//     console.log("Error!");
// }
// xhr.send()

fetch("https://httpbin.org/ip")
    .then(function (response) {
        console.log(response);
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })


const postData = {
    message: "Does it work?"
}
fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
        'Content-Type': "application/json",
        "Accept": "application/json"
    },
    mode: "cors",
    // mode: "no-cors",
    body: JSON.stringify(postData)
})
    .then(function (response) {
        console.log(response);
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })
// promise.then(function (text) {
//     console.log(text);
// }, function (error) {
//     console.warn(`${error.code}: ${error.message}`);
// }).then(function (newText) {
//     console.log(newText);
// })
promise.then(function (text) {
    console.log(text);
}).then(function (newText) {
    console.log(newText);
}).catch(error => {
    console.error(`${error.code}: ${error.message}`);
})
console.log("This is executed right after setTimeout()");