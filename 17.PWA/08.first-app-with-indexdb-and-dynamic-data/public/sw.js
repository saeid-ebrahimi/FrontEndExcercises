const STATIC_CACHE_NAME = 'static-v2'
const DYNAMIC_CACHE_NAME = "dynamic-v2"
const MAX_DYNAMIC_CACHE_ITEMS = 20
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
    "/manifest.json",
    "https://fonts.googleapis.com/css?family=Roboto:400,700",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css",
]
async function addStaticCache(cacheName, filesName) {
    console.log("[Service Worker] Pre Caching App Shell");
    const staticCache = await caches.open(cacheName)
    return staticCache.addAll(filesName)
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

async function unregisterServiceWorkers() {
    if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations()
        for (var i = 0; i < registrations.length; i++) {
            await registrations[i].unregister()
        }
    }
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
            if (request.headers.get('accept').includes('text/html')) {
                const matchResult = await staticCache.match("/fallback.html")
                return matchResult
            }

        }

    }
}

async function updateCacheWithFetch(request, cacheName) {
    const dynamicCache = await caches.open(cacheName)
    const resp = await fetch(request)
    dynamicCache.put(request, resp.clone())
    trimCache(cacheName, MAX_DYNAMIC_CACHE_ITEMS)
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

async function trimCache(cacheName, maxItems) {
    const cache = await caches.open(cacheName)
    const cacheKeys = await cache.keys()
    if (cacheKeys.length > maxItems) {
        await cache.delete(cacheKeys[0])
        trimCache(cacheName, maxItems)
    }
}
// service worker scope is depends on the folder which exists
self.addEventListener('install', function (event) {
    const LOG_STYLES = `color:white;
    background: #1D4ED8;
    padding: 8px 16px;
    border-radius:5px;
    font-size:14px;`;
    console.log('%c [Service Worker] Installing Service Worker ...', LOG_STYLES, event);
    event.waitUntil(addStaticCache(STATIC_CACHE_NAME, STATIC_FILES))
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
// best approach: first cache then update cache with fetch result
function isInArray(string, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            return true
        }
    }
    return false
}

self.addEventListener("fetch", function (event) {
    // 05. First cache then update cache with fetch result with offline mode support: best approach
    const url = 'https://pwagram-3a2a4-default-rtdb.firebaseio.com/posts.json'
    if (event.request.url.indexOf(url) > -1) {
        // First cache then update cache with fetch
        event.respondWith(
            updateCacheWithFetch(event.request, DYNAMIC_CACHE_NAME)
        )
    }
    else if (isInArray(url, STATIC_FILES)) {
        event.respondWith(
            caches.match(event.request)
        )
    }
    else {
        // offline mode support
        event.respondWith(
            firstCacheThenNetworkFallback(event.request, { static: STATIC_CACHE_NAME, dynamic: DYNAMIC_CACHE_NAME })
        )
    }
})
