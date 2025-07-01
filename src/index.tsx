import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/ErrorBoundary';
import { registerSW, setupOnlineOfflineListeners } from './utils/serviceWorker';
import logger from './utils/logger';

// Set up global error handlers
window.addEventListener('error', (event) => {
  logger.error('Global Error:', event.error, {
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
  });
});

window.addEventListener('unhandledrejection', (event) => {
  logger.error('Unhandled Promise Rejection:', new Error(event.reason), {
    reason: event.reason,
  });
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Register service worker for PWA functionality
registerSW({
  onSuccess: (registration) => {
    logger.info('Service Worker registered successfully', { scope: registration.scope });
  },
  onUpdate: (registration) => {
    logger.info('New content is available; please refresh.');
    // You could show a toast notification here asking user to refresh
    if (window.confirm('New version available! Refresh to update?')) {
      window.location.reload();
    }
  },
  onError: (error) => {
    logger.error('Service Worker registration failed', error);
  },
});

// Set up online/offline listeners
setupOnlineOfflineListeners();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((metric) => {
  logger.debug('Web Vital:', metric);
});
