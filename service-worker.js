/*
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("cutie-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/fluffy-cat.html",
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
*/

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("cutie-cache").then((cache) => {
            const filesToCache = [
                "/",
                "/index.html",
                "/fluffy-cat.html",
                "/fluffy-cat.jpg",
                "/angy-cat.jpg",
                "/manifest.json",
                "/icon-192.jpg",
                "/icon-512.jpg"
            ];

            // 각 파일을 하나씩 캐시에 추가하도록 변결 및 확인 로그 추가
            return Promise.all(filesToCache.map((file) => {
                return cache.add(file).catch((err) => {
                    console.error(`Failed to cache: ${file}`, err);
                });
            }));
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


/*
self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(async (cache) => {
      let ok,
      cats = [
        'a', 'folder', 'with',
        'lots', 'of', 'files',
        'for', 'the', 'same', 'extension'
      ],
      c = [
        '/css/video-js.css',
        '/img/base/favicon.ico',
        '/img/base/favicon.png',
        '/img/base/favicon.svg',
        ...cats.map(i => '/img/cat/' + i + '.jpg'),
        '/img/svg/404.svg',
        '/js/caman.full.min.js',
        '/js/jquery-3.6.0.min.js',
        '/js/video.min.js'
        ];
  
      console.log('ServiceWorker: Caching files:', c.length, c);
      try {
        ok = await cache.addAll(c);
      } catch (err) {
        console.error('sw: cache.addAll');
        for (let i of c) {
          try {
            ok = await cache.add(i);
          } catch (err) {
            console.warn('sw: cache.add',i);
          }
        }
      }
  
      return ok;
    }));
  
    console.log('ServiceWorker installed');
  });

  */