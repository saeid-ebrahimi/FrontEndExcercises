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
if ('serviceWorker' in navigator) {
    registerServiceWorker()
}
window.addEventListener('beforeinstallprompt', function (evt) {
    console.log("%cbeforeinstallprompt fired", 'background:yellow;color:black;padding:5px;border-radius:5px;');
    evt.preventDefault();
    deferredPrompt = evt;
    return false
})
