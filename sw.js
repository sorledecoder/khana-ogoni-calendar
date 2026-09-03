const CACHE="native-calendar-v2"; const ASSETS=["./","./index.html","./manifest.webmanifest"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{let q=r.clone();caches.open(CACHE).then(c=>c.put(e.request,q));return r}).catch(()=>caches.match("./index.html")))));
