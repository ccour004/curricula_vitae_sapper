!function(){"use strict";const e=1606341472615,t="cache"+e,s=["/client/client.fa0d0392.js","/client/inject_styles.5607aec6.js","/client/index.f0e4c2d1.js","/client/about.5b22a485.js","/client/[slug].54568476.js"].concat(["/service-worker-index.html","/favicon.png","/flowers_and_smoke_trees.jpg","/global.css","/grey_mountains.jpg","/logo-192.png","/logo-512.png","/manifest.json","/mountain_fall_forest.jpg","/mountains_blue_trees.jpg","/sunset_trees.jpg","/top-view-trees.jpg"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}})))))}))}();