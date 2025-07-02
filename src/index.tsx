import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/ErrorBoundary';
import * as serviceWorker from './utils/serviceWorker';
import logger from './utils/logger';

// Set up global error handlers
window.addEventListener('error', (event) => {
  logger.error('Global Error', event.error, {
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
  });
});

window.addEventListener('unhandledrejection', (event) => {
  logger.error('Unhandled Promise Rejection', event.reason instanceof Error ? event.reason : new Error(String(event.reason)), {
    reason: event.reason,
  });
});

// Create root container
const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

// Disable StrictMode in production
const AppWrapper = process.env.NODE_ENV === 'development' 
  ? ({ children }: { children: React.ReactNode }) => (
      <React.StrictMode>{children}</React.StrictMode>
    )
  : ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Render with optimizations
root.render(
  <AppWrapper>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </AppWrapper>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'production') {
  serviceWorker.registerSW({
    onSuccess: (registration) => {
      logger.info('Service Worker registered successfully', { scope: registration.scope });
    },
    onUpdate: (registration) => {
      // Instead of showing a confirmation dialog, just notify the user
      const event = new CustomEvent('swUpdate', { detail: registration });
      window.dispatchEvent(event);
      logger.info('New content is available');
    },
    onError: (error) => {
      logger.error('Service Worker registration failed', error);
    },
  });
} else {
  serviceWorker.unregister();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((metric) => {
  if (process.env.NODE_ENV === 'development') {
    logger.debug('Web Vital:', metric);
  }
});
