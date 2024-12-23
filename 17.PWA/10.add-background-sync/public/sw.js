importScripts('/src/js/idb.js')
importScripts("/src/js/utility.js")

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
    "/src/js/idb.js",
    "/src/js/utility.js",
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
            const dynamicCache = await caches.open(cacheNames.dynamic)
            await dynamicCache.put(request.url, fetchResponse.clone())
            return fetchResponse
        } catch (error) {
            const staticCache = await caches.open(cacheNames.static)
            if (request.headers.get('accept').includes('text/html')) {
                return staticCache.match("/fallback.html")
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

async function storeData(storeName, request) {
    const response = await fetch(request)
    await clearAllData("posts")
    const clonedResp = response.clone()
    const data = await clonedResp.json()
    for (let key in data) {
        writeData(storeName, data[key])
    }
    return response
}

self.addEventListener("fetch", function (event) {
    const url = 'https://pwagram-3a2a4-default-rtdb.firebaseio.com/posts.json'
    if (event.request.url.indexOf(url) > -1) {
        event.respondWith(
            storeData("posts", event.request)
            // fetch(event.request)
            //     .then(function (res) {
            //         var clonedResp = res.clone()
            //         clonedResp.json()
            //             .then(function (data) {
            //                 for (let key in data) {
            //                     writeDataV1("posts", data[key])
            //                 }
            //             })
            //         return res
            //     })
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

const url = 'https://pwagram-3a2a4-default-rtdb.firebaseio.com/posts.json'

function sendDataFromIndexedDB(postData) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(function (response) {
            console.log("Sent data", response);
            if (response.ok) {
                deleteItemFromData('sync-posts', postData.id)
            }
        })
        .catch(function (error) {
            console.log("Error While Sending Data", error);
        })
}

self.addEventListener("sync", function (event) {
    console.log("[Service Worker] Background syncing", event);
    if (event.tag === 'sync-new-posts') {
        console.log('[Service Worker] Syncing new posts');
        event.waitUntil(
            readAllData('sync-posts')
                .then(function (allData) {
                    for (let data of allData) {
                        const formData = {
                            id: data.id,
                            title: data.title,
                            location: data.location,
                            image: 'https://images.simedia.cloud/cms-v2/CustomerData/579/Files/Images/02-gastlichkeit/header_slider/379348.jpg/image.jpg?v=638677923726'
                        }
                        sendDataFromIndexedDB(formData)
                    }
                })
        )
    }
})