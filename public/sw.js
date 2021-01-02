const CACHE_STATIC_NAME = "static_v1"
const CACHE_DYNAMIC_NAME = "dynamic_v2"

self.addEventListener('install', (event) => {
  console.log('installing service worker', event)
  event.waitUntil(caches.open(CACHE_STATIC_NAME).then((cache) => {
    console.log('service worker precaching app shell');
    cache.addAll([
        '/',
        '/static/css/main.f95d1124.chunk.css',
        '/index.html',
        '/static/js/2.c7367c9a.chunk.js',
        '/static/js/main.e506733e.chunk.js'
    ])
  }))
})

self.addEventListener('active', (event) => {
  console.log('activated service worker', event);
//   event.waitUntil(
//     caches.keys()
//     .then((keyList) => {
//       return Promise.all(keyList.map(key => {
//         if(key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME){
//           console.log('service worker removing old cache ', key);
//           return caches.delete(key);
//         }
//       }))
//     })
//   );
  return self.clients.claim()
})

self.addEventListener('fetch', (event) => {

  event.respondWith(
    caches.match(event.request).then((response) => {
        console.log('response', response)
      if(response){
        return response;
      } else {
        return fetch(event.request)
        .then((res) => {
          return caches.open(CACHE_DYNAMIC_NAME)
          .then((cache) => {
            cache.put(event.request.url, res.clone());
            return res;
          }).catch(err => {

          })
        })
      }
    })
  )
})
