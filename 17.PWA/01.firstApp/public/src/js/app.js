var deferredPrompt;
if (!window.Promise) {
    window.Promise = Promise
}
async function registerServiceWorker() {
    try {
        const LOG_STYLES = `color:white;
        background: #166534;
        padding: 8px 16px;
        border-radius:5px;
        font-size:14px;`
        const registerResult =
            // await navigator.serviceWorker.register(
            //     "/sw.js",
            //     {
            //         scope: "/help",
            //     }
            // );
            await navigator.serviceWorker.register(
                "/sw.js",
            );
        console.log(
            "%cService Worker is registered!",
            LOG_STYLES
        );
    } catch (error) {
        console.warn(error)
    }
}

async function generatePromise() {
    const promise = () => {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("This is executed once the timer is done!")
                // reject({ code: 500, message: "An error occurred!" })
                // console.log("This is executed once the timer is done!");
            }, 3000);
        });
    }
    try {
        const result = await promise()
        const text = await result.text
        console.log(text);
    } catch (error) {
        console.error(`${error.code}: ${error.message}`);
    }
}
// generate promise with callback function
// promise.then(function (text) {
//     console.log(text);
// }).then(function (newText) {
//     console.log(newText);
// }).catch(error => {
//     console.error(`${error.code}: ${error.message}`);
// })
// console.log("This is executed right after setTimeout()");

async function getIP(url) {
    try {
        const result = await fetch(url)
        const ip = await result.json()
        console.log(ip);
    } catch (error) {
        console.warn(error);
    }
}
// get ip using callback functions
// fetch("https://httpbin.org/ip")
//     .then(function (response) {
//         console.log(response);
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

async function postData(url, postData) {
    try {
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            mode: "cors", // or "no-cors"
            body: JSON.stringify(postData)
        })
        const data = await result.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
// post data using callback functions
// const postData = {
//     message: "Does it work?"
// }
// fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//         'Content-Type': "application/json",
//         "Accept": "application/json"
//     },
//     mode: "cors",
//     // mode: "no-cors",
//     body: JSON.stringify(postData)
// })
//     .then(function (response) {
//         console.log(response);
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

if ('serviceWorker' in navigator) {
    registerServiceWorker()
}
window.addEventListener('beforeinstallprompt', function (evt) {
    console.log("%cbeforeinstallprompt fired", 'background:yellow;color:black;padding:5px;border-radius:5px;');
    evt.preventDefault();
    deferredPrompt = evt;
    return false
})
generatePromise()
getIP("https://httpbin.org/ip")
postData("https://httpbin.org/post", {
    message: "Does it works?"
})

// XHR is a synchronous operation and service worker don't support it.
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
