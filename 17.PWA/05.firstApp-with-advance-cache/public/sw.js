const STATIC_CACHE_NAME = 'static-v3'
const DYNAMIC_CACHE_NAME = "dynamic-v2"
// adding polyfills are unnecessary
// because old browser don't support service workers "src/js/promise.js", "src/js/fetch.js"
const STATIC_FILES = [
    "/",
    "/index.html",
    "/fallback.html",
    "/src/js/app.js",
    "/src/js/feed.js",
    "/src/js/promise.js",
    "/src/js/fetch.js",
    "/src/js/material.min.js",
    "/src/css/app.css",
    "/src/css/feed.css",
    "/favicon.ico",
    "/src/images/main-image.jpg",
    "https://fonts.googleapis.com/css?family=Roboto:400,700",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css",

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

async function firstCacheThenNetworkFallback(request, cacheNames) {
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
            if (request.url.indexOf("/help")) {
                const matchResult = await staticCache.match("./fallback.html")
                return matchResult
            }

        }

    }
}

async function firstNetworkThenCacheFallback(request, cacheName) {
    try {
        const fetchResponse = await fetch(request)
        const dynamicCache = await caches.open(cacheName)
        dynamicCache.put(request, fetchResponse.clone())
        return fetchResponse
    } catch (error) {
        const dynamicCache = await caches.match(request)
        return dynamicCache
    }
}

async function updateCacheWithFetch(request, cacheName) {
    const dynamicCache = await caches.open(cacheName)
    const resp = await fetch(request)
    dynamicCache.put(request, resp.clone)
    return resp

}

function isInArray(string, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            return true
        }
    }
    return false
}
// service worker scope is depends on the folder which exists
self.addEventListener('install', function (event) {
    const LOG_STYLES = `color:white;
    background: #1D4ED8;
    padding: 8px 16px;
    border-radius:5px;
    font-size:14px;`;
    console.log('%c [Service Worker] Installing Service Worker ...', LOG_STYLES, event);
    event.waitUntil(addStaticCache(cacheName = STATIC_CACHE_NAME, filesName = STATIC_FILES))
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
    //     firstCacheThenNetworkFallback(event.request, DYNAMIC_CACHE_NAME)
    // )

    // 02. Cache only approach: is not recommended
    // event.respondWith(
    //     cacheOnlyApproach(event.request)
    // )

    // 03. Network only approach: is not recommended
    // event.respondWith(
    //     networkOnlyApproach(event.request)
    // )

    // 04. Network with cache fallback: bad user experience
    // event.respondWith(
    //     firstNetworkThenCacheFallback(event.request, DYNAMIC_CACHE_NAME)
    // )

    // 05. First cache then update cache with fetch result with offline mode support: best approach
    const url = 'https://httpbin.org/get'
    if (event.request.url.indexOf(url) > -1) {
        // First cache then update cache with fetch
        event.respondWith(
            updateCacheWithFetch(event.request, DYNAMIC_CACHE_NAME)
        )
    } else if (isInArray(url, STATIC_FILES)) {
        event.respondWith(
            caches.match(event.request)
        )
    } else {
        // offline mode support
        event.respondWith(
            firstCacheThenNetworkFallback(event.request, { static: STATIC_CACHE_NAME, dynamic: DYNAMIC_CACHE_NAME })
        )
    }

})





