/* eslint-env serviceworker */
/* global self, caches, fetch */

const CACHE_NAME = 'zhwane-driving-school-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/main.js',
  '/static/css/main.css',
  '/manifest.json',
  '/logo192.svg',
  '/logo512.svg',
  '/heropicture.jpeg',
  '/bheki pic.png',
  '/mthoko pic.png',
  '/zhwane pic.png',
  '/commercial truck.jpeg',
  '/construction equipment.jpeg',
  '/driving anxiety.jpeg',
  '/highway code.jpeg',
  '/instructor theory pic.jpeg',
  '/parking student.jpeg',
  '/theory class picture.jpeg'
];

// Install service worker and cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate service worker and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch resources from cache or network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request because it's a stream and can only be consumed once
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response because it's a stream and can only be consumed once
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Handle background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'booking-form-sync') {
    event.waitUntil(
      // Here you would typically sync any pending booking form data
      // For now, we'll just log that sync was attempted
      Promise.resolve().then(() => {
        console.log('Background sync completed');
      })
    );
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/logo.svg',
    badge: '/logo.svg',
    vibrate: [200, 100, 200],
    tag: 'driving-school-notification',
    requireInteraction: true
  };

  event.waitUntil(
    self.registration.showNotification('Zhwane Driving School', options)
  );
}); 