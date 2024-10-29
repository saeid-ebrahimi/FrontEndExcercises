
var CACHE_STATIC_NAME = 'static-v2';
var CACHE_DYNAMIC_NAME = 'dynamic-v1';
const STATIC_FILES = [
  '/',
  '/index.html',
  '/src/css/app.css',
  '/src/css/main.css',
  '/src/js/main.js',
  '/src/js/material.min.js',
  'https://fonts.googleapis.com/css?family=Roboto:400,700',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function (cache) {
        cache.addAll(STATIC_FILES);
      })
  )
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE_STATIC_NAME) {
            return caches.delete(key);
          }
        }));
      })
  );
});

// step 5, 6: Dynamic caching for Cache, then network strategy
function isInArray(string, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      return true
    }
  }
  return false
}
self.addEventListener("fetch", function (event) {
  if (event.request.url.indexOf('https://httpbin.org/ip') > -1) {
    event.respondWith(
      caches.open(CACHE_DYNAMIC_NAME)
        .then(function (cache) {
          return fetch(event.request)
            .then(function (resp) {
              cache.put(event.request.url, resp.clone())
              return resp;
            })

        })
    )
  } else if (isInArray(event.request.url, STATIC_FILES)) {
    event.respondWith(
      caches.match(event.request)
    )
  }
  else {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response;
          } else {
            return fetch(event.request)
              .then(function (res) {
                return caches.open(CACHE_DYNAMIC_NAME)
                  .then(function (cache) {
                    cache.put(event.request.url, res.clone());
                    return res;
                  });
              })
              .catch(function (err) {

              });
          }
        })
    );
  }
})

// Network, fallback to cache (with dynamic cache)
// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     fetch(event.request)
//       .then(function (resp) {
//         return caches.open(DYNAMIC_CACHE_NAME)
//           .then(function (cache) {
//             cache.put(event.request.url, resp.clone())
//             return resp
//           })
//       })
//       .catch(function (error) {
//         return caches.match(event.request)
//       })
//   )
// })

// Network, fallback to cache
// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     fetch(event.request)
//       .catch(function (error) {
//         return caches.match(error.request)
//       })
//   )
// })

// Cache , Fallback to network strategy (with dynamic caching)
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function (response) {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(function (res) {
//               return caches.open(CACHE_DYNAMIC_NAME)
//                 .then(function (cache) {
//                   cache.put(event.request.url, res.clone());
//                   return res;
//                 });
//             })
//             .catch(function (err) {

//             });
//         }
//       })
//   );
// });


// network only approach
// self.addEventListener("fetch", function (event) {
//   event.respondWith(fetch(event.request))
// })

// cache only approach
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request)
//   )
// })