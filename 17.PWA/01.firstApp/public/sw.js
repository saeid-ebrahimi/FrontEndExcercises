// service worker scope is depends on the folder which exists
self.addEventListener('install', function (event) {
    console.log('%c [Service Worker] Installing Service Worker ...', "background:green; color:white;padding:3px;", event);
})

self.addEventListener('activate', function (event) {
    console.log('%c [Service Worker] Activating Service Worker ...', "background:lightblue;color:black;padding:3px;", event);
    return self.clients.claim();
})

self.addEventListener("fetch", function (event) {
    console.log('%c [Service Worker] Fetching something...', "background:gray;text:white;", event);
    event.respondWith(fetch(event.request))
})

