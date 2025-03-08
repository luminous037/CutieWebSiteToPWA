self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("cutie-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/fluffy-cat.html",
                "/style.css",
                "/fluffy-cat.jpg",
                "/angy-cat.jpg",
                "/manifest.json",
                "/icon-192.jpg",
                "/icon-512.jpg"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
