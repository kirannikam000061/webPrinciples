
const cacheName = 'k_nikams';

const appShellFiles = [
  './images/27633227-0-telemed-1.png',
  './images/about.svg',
  './images/college-graduation.png',
  './images/college-graduation_big.png',
  './images/contact.png',
  './images/contact_big.png',
  './images/exit-top-right (1).png',
  './images/exit-top-right.png',
  './images/external-link-alt-solid.svg',
  './images/facebook.png',
  './images/feelya-logo2.svg',
  './images/home.png',
  './images/home-contact.png',
  './images/ic_logo.webp',
  './images/instagram.png',
  './images/linkedin.png',
  './images/logo-referhub.svg',
  './images/mail.png',
  './images/menu.png',
  './images/myImage.jpg',
  './images/skype.png',
  './images/smartphone.png',
  './images/star.svg',
  './images/TFsource-logo.svg',
  './images/top.png',
  './images/top1.png',
  './images/umg-logo.png',
  './images/user.png',
  './images/user_big.png',
  './css/styles.css',
  './js/main.js',
  './contact.html',
  './edu_tech.html',
  './index.html'

];


self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(appShellFiles);
  })());
});

self.addEventListener("fetch", function(e) {
    console.log(`start server worker`);
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) { return r; }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  });