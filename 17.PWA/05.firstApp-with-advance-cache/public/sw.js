const STATIC_CACHE_NAME = 'static-v3'
const DYNAMIC_CACHE_NAME = "dynamic-v2"
const STATIC_FILES = [
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

async function addStaticCache(cacheName, filesName) {
    const cache = await caches.open(cacheName)
    console.log("[Service Worker] Pre Caching App Shell");
    await cache.addAll(filesName)
}

async function removeOldCaches(fileNames) {
    const cacheKeyList = await caches.keys()
    const newCacheKeyList = cacheKeyList.map((cacheKey) => {
        if (!fileNames.includes(cacheKey)) {
            console.log("%c [Service Worker] Removing old cache.", "background:orange; color:white;padding:3px;", cacheKey);
            return caches.delete(cacheKey)
        }
    })
    return Promise.all(newCacheKeyList)
}

async function networkOnlyApproach(request) {
    return fetch(request)
}
async function cacheOnlyApproach(request) {
    return caches.match(request)
}

async function firstCacheThenNetwork(request, cacheNames) {
    const matchResult = await caches.match(request)
    if (matchResult) {
        return matchResult
    } else {
        try {
            const fetchResponse = await fetch(request)
            const dynamicCache = caches.open(cacheNames.dynamic)
            await dynamicCache.put(request.url, fetchResponse.clone())
            return fetchResponse
        } catch (error) {
            const staticCache = await caches.open(cacheNames.static)
            const matchResult = await staticCache.match("./fallback.html")
            return matchResult
        }

    }
}
// service worker scope is depends on the folder which exists
self.addEventListener('install', function (event) {
    const LOG_STYLES = `color:white;
    background: #1D4ED8;
    padding: 8px 16px;
    border-radius:5px;
    font-size:14px;`;
    console.log('%c [Service Worker] Installing Service Worker ...', LOG_STYLES, event); event.waitUntil(addStaticCache(cacheName = STATIC_CACHE_NAME, filesName = STATIC_FILES))
})

self.addEventListener('activate', function (event) {
    const LOG_STYLES = `color:white;
        background: #7C3AED;
        padding: 8px 16px;
        border-radius:5px;
        font-size:14px;`;
    // because it's possible that the previous version of sw is working in opened tab it activate as we close the tab
    console.log(
        "%c[Service Worker] Activating Service Worker...",
        LOG_STYLES,
        event
    );
    event.waitUntil(
        removeOldCaches([STATIC_CACHE_NAME, DYNAMIC_CACHE_NAME])
    )
    return self.clients.claim();
})

self.addEventListener("fetch", function (event) {
    // 01. First cache approach with network fallback
    // event.respondWith(
    //     firstCacheThenNetwork(event.request)
    // )

    // 02. Cache only approach: is not recommended
    // event.respondWith(
    //     cacheOnlyApproach(event.request)
    // )

    // 03. Network only approach: is not recommended
    // event.respondWith(
    //     networkOnlyApproach(event.request)
    // )

    // 04. Network with cache fallback


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




