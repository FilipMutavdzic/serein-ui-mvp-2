const CACHE = 'serein-v1'
const ASSETS = [
  '/', '/manifest.webmanifest',
  '/media/packs/breeze/image-1.svg',
  '/media/packs/breeze/image-2.svg',
  '/media/packs/breeze/image-3.svg',
  '/media/packs/shore/image-1.svg',
  '/media/packs/shore/image-2.svg',
  '/media/packs/shore/image-3.svg',
  '/media/packs/grove/image-1.svg',
  '/media/packs/grove/image-2.svg',
  '/media/packs/grove/image-3.svg',
]

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k!==CACHE && caches.delete(k)))).then(()=>self.clients.claim()))
})

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(res => {
        const copy = res.clone()
        caches.open(CACHE).then(cache => cache.put(e.request, copy))
        return res
      }).catch(()=> cached)
      return cached || fetchPromise
    })
  )
})
