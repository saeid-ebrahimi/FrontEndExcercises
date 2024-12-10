const STATIC_CACHE_NAME = 'static-v2'
const DYNAMIC_CACHE_NAME = "dynamic-v3"
const STATIC_FILES = [
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
]

async function addStaticCache(cacheName, filesName) {
    const cache = await caches.open(cacheName)
    console.log("[Service Worker] Pre Caching App Shell");
    await cache.addAll(filesName)
}

async function respondWihCache(cacheName, request) {
    try {
        const response = await caches.match(request)
        if (response) {
            return response
        } else {
            const fetchResponse = await fetch(request)
            const dynamicCache = await caches.open(cacheName)

            await dynamicCache.put(request.url, fetchResponse.clone())
            return fetchResponse

        }
    } catch (error) {
        console.log(error);
    }
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
// service worker scope is depends on the folder which exists
self.addEventListener('install', async function (event) {
    const LOG_STYLES = `color:white;
    background: #1D4ED8;
    padding: 8px 16px;
    border-radius:5px;
    font-size:14px;`;
    console.log('%c [Service Worker] Installing Service Worker ...', LOG_STYLES, event);
    // event.waitUntil(
    //     caches.open(STATIC_CACHE_NAME)
    //         .then(function (cache) {
    //             console.log("[Service Worker] Pre Caching App Shell");
    //             // cache.add("/")
    //             cache.addAll(STATIC_FILES)
    //         })
    // )
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
        // caches.keys()
        //     .then(function (keyList) {
        //         return Promise.all(keyList.map(function (key) {
        //             if (key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
        //                 console.log("%c [Service Worker] Removing old cache.", "background:orange; color:white;padding:3px;", key);
        //                 return caches.delete(key)
        //             }
        //         }))
        //     })
    )
    return self.clients.claim();
})

self.addEventListener("fetch", function (event) {
    // console.log('%c [Service Worker] Fetching something...', "background:gray;text:white;", event);
    event.respondWith(
        respondWihCache(DYNAMIC_CACHE_NAME, event.request)
        // caches.match(event.request)
        //     .then(function (response) {
        //         if (response) {
        //             return response;
        //         } else {
        //             return fetch(event.request)
        //                 .then(function (resp) {
        //                     return caches.open(DYNAMIC_CACHE_NAME)
        //                         .then(function (cache) {
        //                             cache.put(event.request.url, resp.clone())
        //                             return resp
        //                         })
        //                 })
        //                 .catch(function (err) {
        //                     console.log(err)
        //                 })
        //         }
        //     })

    )
});

