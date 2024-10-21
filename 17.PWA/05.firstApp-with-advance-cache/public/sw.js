var STATIC_CACHE_NAME = 'static-v14'
var DYNAMIC_CACHE_NAME = "dynamic-v2"
var STATIC_FILES = [
    "/",
    "/index.html",
    "/offline.html",
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
]
// service worker scope is depends on the folder which exists
self.addEventListener('install', function (event) {
    console.log('%c [Service Worker] Installing Service Worker ...', "background:green; color:white;padding:3px;", event);
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then(function (cache) {
                console.log("[Service Worker] Pre Caching App Shell");
                // cache.add("/")
                cache.addAll(STATIC_FILES)
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
// best approach: first cache then update cache with fetch result
self.addEventListener("fetch", function (event) {
    var url = 'https://httpbin.org/get'
    if (event.request.url.indexOf(url) > -1) {
        event.respondWith(
            caches.open(DYNAMIC_CACHE_NAME)
                .then(function (cache) {
                    return fetch(event.request)
                        .then(function (resp) {
                            cache.put(event.request, resp.clone())
                            return resp
                        })
                })
        )
    } else if (new RegExp('\\b' + STATIC_FILES.join("\\b|\\b") + "\\b").test(event.request.url)) {
        event.respondWith(
            caches.match(event.request)
        )
    }
    else {
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
                                return caches.open(STATIC_CACHE_NAME)
                                    .then(function (cache) {
                                        if (event.request.url.indexOf("/help") > -1) {
                                            return cache.match("/offline.html")
                                        }
                                    })
                            })
                    }
                })
        )
    }

})

// cache first approach
// self.addEventListener("fetch", function (event) {
//     // console.log('%c [Service Worker] Fetching something...', "background:gray;text:white;", event);
//     event.respondWith(
//         caches.match(event.request)
//             .then(function (response) {
//                 if (response) {
//                     return response;
//                 } else {
//                     return fetch(event.request)
//                         .then(function (resp) {
//                             return caches.open(DYNAMIC_CACHE_NAME)
//                                 .then(function (cache) {
//                                     cache.put(event.request.url, resp.clone())
//                                     return resp
//                                 })
//                         })
//                         .catch(function (err) {
//                             console.log(err)
//                             return caches.open(STATIC_CACHE_NAME)
//                                 .then(function (cache) {
//                                     return cache.match("/offline.html")
//                                 })
//                         })
//                 }
//             })

//     )
// });

// network first approach: bad user experience for slow networks
// self.addEventListener("fetch", function (event) {
//     event.respondWith(
//         fetch(event.request)
//             .then(function (resp) {
//                 return caches.open(DYNAMIC_CACHE_NAME)
//                     .then(function (cache) {
//                         cache.put(event.request.url, resp.clone())
//                         return resp
//                     })
//             })
//             .catch(function (error) {
//                 return caches.match(event.request)
//             })
//     )
// });

// cache only approach: is not recommended
// self.addEventListener("fetch", function (event) {
//     event.respondWith(
//         caches.match(event.request)
//     )
// });

// Network only approach: is not recommended
// self.addEventListener("fetch", function (event) {
//     event.respondWith(
//         fetch(event.request)
//     )
// })
