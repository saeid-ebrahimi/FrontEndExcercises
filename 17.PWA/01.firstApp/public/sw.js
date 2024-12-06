// service worker scope is depends on the folder which exists
self.addEventListener('install', function (event) {
    const LOG_STYLES = `color:white;
    background: #1D4ED8;
    padding: 8px 16px;
    border-radius:5px;
    font-size:14px;`;
    console.log(
        "%c[Service Worker] Installing Service Worker... ",
        LOG_STYLES,
        event
    );
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
    return self.clients.claim();
})

self.addEventListener("fetch", function (event) {
    const LOG_STYLES = `color:white;
        background: #0F172A;
        padding: 5px;
        border-radius:5px;`;
    console.log(
        "%c[Service Worker] Fetching data...",
        LOG_STYLES,
        event
    );
    return event.respondWith(fetch(event.request));
})

