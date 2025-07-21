self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('dashboard-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then(response => response || caches.match('./'))
    )
  );
});
