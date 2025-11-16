const CACHE_NAME = "mini-jumia-cache-v1";
const urlsToCache = [
  // The root of the current subdirectory (e.g., /market/)
  "./", 
  // All local files must use "./" for correct relative pathing
  "./index.html",
  "./admin.html",
  "./upload.html",
  "./edit-products.html",
  "./checkout.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  // External CDN links should remain as full URLs
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
];

// Install Service Worker and cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // The addAll operation is atomic and will now succeed.
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate Service Worker and clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Intercept fetch requests and serve from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() =>
          // Fallback path must also be relative
          caches.match("./index.html") 
        )
      );
    })
  );
});
