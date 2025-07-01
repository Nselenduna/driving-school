/* eslint-env serviceworker */
/* global self, caches, fetch */

const CACHE_NAME = 'zhwane-driving-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/heropicture.jpeg',
  '/logo.svg',
  '/logo192.svg',
  '/logo512.svg'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // Cache what we can, ignore failures
        return Promise.allSettled(
          urlsToCache.map(url => 
            cache.add(url).catch(err => 
              console.warn(`Failed to cache ${url}:`, err)
            )
          )
        );
      })
  );
  // Activate immediately
  self.skipWaiting();
});

// Fetch Event - Network First for HTML, Cache First for assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      const url = new URL(event.request.url);
      
      // Network-first for HTML and API requests
      if (event.request.mode === 'navigate' || 
          url.pathname.startsWith('/api/') || 
          event.request.headers.get('accept')?.includes('text/html')) {
        try {
          const networkResponse = await fetch(event.request);
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        } catch (error) {
          const cachedResponse = await caches.match(event.request);
          return cachedResponse || caches.match('/');
        }
      }
      
      // Cache-first for assets
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        // Return default icon for missing images
        if (event.request.destination === 'image') {
          return caches.match('/logo.svg');
        }
        throw error;
      }
    })()
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients immediately
      clients.claim();
    })
  );
});

// Background Sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'booking-form-sync') {
    event.waitUntil(syncBookingForms());
  }
});

// Function to sync booking forms when back online
async function syncBookingForms() {
  try {
    const cache = await caches.open('booking-forms-cache');
    const requests = await cache.keys();
    
    for (const request of requests) {
      try {
        const response = await fetch(request);
        if (response.ok) {
          await cache.delete(request);
          console.log('Synced booking form successfully');
        }
      } catch (error) {
        console.error('Failed to sync booking form:', error);
      }
    }
  } catch (error) {
    console.error('Error in syncBookingForms:', error);
  }
}

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