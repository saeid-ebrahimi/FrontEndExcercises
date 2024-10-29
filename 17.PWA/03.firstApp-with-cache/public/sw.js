var STATIC_CACHE_NAME = 'static-v4'
var DYNAMIC_CACHE_NAME = "dynamic-v2"
// service worker scope is depends on the folder which exists
self.addEventListener('install', function (event) {
    console.log('%c [Service Worker] Installing Service Worker ...', "background:green; color:white;padding:3px;", event);
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then(function (cache) {
                console.log("[Service Worker] Pre Caching App Shell");
                // cache.add("/")
                cache.addAll([
                    "/",
                    "/index.html",
                    "src/js/app.js",
                    "src/js/feed.js",
                    "src/js/material.min.js",
                    "src/css/app.css",
                    "src/css/feed.css",
                    "/favicon.ico",
                    "src/images/main-image.jpg",
                    "https://fonts.googleapis.com/css?family=Roboto:400,700",
                    "https://fonts.googleapis.com/icon?family=Material+Icons",
                    "https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css",
                    // adding polyfills are unnecessary
                    // because old browser don't support service workers "src/js/promise.js", "src/js/fetch.js"
                ])
            })
    )
})

self.addEventListener('activate', function (event) {
    console.log('%c [Service Worker] Activating Service Worker ...',

        "background:lightblue;color:black;padding:3px;", event);
    event.waitUntil(
        caches.keys()
            .then(function (keyList) {
                return Promise.all(keyList.map(function (key) {
                    if (key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
                        console.log("%c [Service Worker] Removing old cache.", "background:orange; color:white;padding:3px;", key);
                        return caches.delete(key)
                    }
                }))
            })
    )
    return self.clients.claim();
})

self.addEventListener("fetch", function (event) {
    // console.log('%c [Service Worker] Fetching something...', "background:gray;text:white;", event);
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request)
                        .then(function (resp) {
                            return caches.open(DYNAMIC_CACHE_NAME)
                                .then(function (cache) {
                                    cache.put(event.request.url, resp.clone())
                                    return resp
                                })
                        })
                        .catch(function (err) {
                            console.log(err)
                        })
                }
            })

    )
});

