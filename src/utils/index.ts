// Utility exports for easy importing

export { default as logger, LogLevel, logApiError, logComponentError } from './logger';
export { 
  registerSW, 
  unregister, 
  isOnline, 
  setupOnlineOfflineListeners 
} from './serviceWorker';

// Additional utility functions
export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format mobile numbers (priority check for 07 numbers)
  if (cleaned.length === 11 && cleaned.startsWith('07')) {
    return cleaned.replace(/(\d{5})(\d{6})/, '$1 $2');
  }
  
  // Format other UK phone numbers
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{5})/, '$1 $2 $3');
  }
  
  return phone; // Return original if no pattern matches
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(?:(?:\+44)|(?:0))(?:\d{10}|\d{4}\s?\d{6}|\d{3}\s?\d{3}\s?\d{4})$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}; 