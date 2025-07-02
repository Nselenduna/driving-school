// Service Worker registration utility with error handling

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

interface ServiceWorkerConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onError?: (error: Error) => void;
}

let isFirstLoad = true;

export function registerSW(config?: ServiceWorkerConfig) {
  // Skip service worker registration in development
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  if (!('serviceWorker' in navigator)) {
    return;
  }

  const publicUrl = new URL(process.env.PUBLIC_URL || '', window.location.href);
  if (publicUrl.origin !== window.location.origin) {
    // Our service worker won't work if PUBLIC_URL is on a different origin
    return;
  }

  // Only register service worker once
  if (!isFirstLoad) {
    return;
  }
  isFirstLoad = false;

  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;

    if (isLocalhost) {
      // This is running on localhost. Check if a service worker still exists or not.
      checkValidServiceWorker(swUrl, config);
    } else {
      // Is not localhost. Just register service worker
      registerValidSW(swUrl, config);
    }
  });
}

function checkValidServiceWorker(swUrl: string, config?: ServiceWorkerConfig) {
  // Check if the service worker can be found.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' }
  })
    .then(response => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('No internet connection found. App is running in offline mode.');
    });
}

function registerValidSW(swUrl: string, config?: ServiceWorkerConfig) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      console.log('Service Worker registered successfully');
      
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New content available - don't auto refresh, just notify
              console.log('New content is available');
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log('Content is cached for offline use');
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
      if (config && config.onError) {
        config.onError(error);
      }
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch(console.error);
  }
}

// Check if the app is running offline
export function isOnline(): boolean {
  return navigator.onLine;
}

// Listen for online/offline events
export function setupOnlineOfflineListeners() {
  let syncInProgress = false;

  window.addEventListener('online', () => {
    console.log('App is back online');
    // Prevent multiple sync attempts
    if (syncInProgress) return;

    if ('serviceWorker' in navigator) {
      syncInProgress = true;
      navigator.serviceWorker.ready
        .then((registration) => {
          if ('sync' in registration) {
            return (registration as any).sync.register('booking-form-sync');
          }
        })
        .catch(console.error)
        .finally(() => {
          syncInProgress = false;
        });
    }
  });

  window.addEventListener('offline', () => {
    console.log('App is offline');
  });
} 