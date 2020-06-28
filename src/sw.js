
self.addEventListener('install', function () {
    self.skipWaiting();
});

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister()
        })
    }
}
