const cacheName = 'cache-v1'
const assetsToCache = [
  '/',
  'index.html',
  'assets/css/bootstrap.min.css',
  'assets/css/custom.css',
  'assets/js/bootstrap.bundle.min.js',
  'fonts/ReenieBeanie-Regular.ttf',
]

self.addEventListener('install', ( event ) => {
  event.waitUntil(  
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

