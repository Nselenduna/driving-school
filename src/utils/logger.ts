// Centralized logging utility with error handling and monitoring

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: any;
  error?: Error;
  userAgent?: string;
  url?: string;
}

class Logger {
  private logLevel: LogLevel;
  private logs: LogEntry[] = [];
  private maxLogs: number = 100;

  constructor(level: LogLevel = LogLevel.INFO) {
    this.logLevel = level;
  }

  private createLogEntry(level: LogLevel, message: string, data?: any, error?: Error): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      data,
      error,
      userAgent: navigator.userAgent,
      url: window.location.href,
    };
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.logLevel;
  }

  private addToBuffer(entry: LogEntry): void {
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift(); // Remove oldest log
    }
  }

  private formatMessage(entry: LogEntry): string {
    const levelName = LogLevel[entry.level];
    return `[${entry.timestamp}] ${levelName}: ${entry.message}`;
  }

  debug(message: string, data?: any): void {
    if (!this.shouldLog(LogLevel.DEBUG)) return;
    
    const entry = this.createLogEntry(LogLevel.DEBUG, message, data);
    this.addToBuffer(entry);
    
    if (process.env.NODE_ENV === 'development') {
      console.debug(this.formatMessage(entry), data);
    }
  }

  info(message: string, data?: any): void {
    if (!this.shouldLog(LogLevel.INFO)) return;
    
    const entry = this.createLogEntry(LogLevel.INFO, message, data);
    this.addToBuffer(entry);
    
    console.info(this.formatMessage(entry), data);
  }

  warn(message: string, data?: any): void {
    if (!this.shouldLog(LogLevel.WARN)) return;
    
    const entry = this.createLogEntry(LogLevel.WARN, message, data);
    this.addToBuffer(entry);
    
    console.warn(this.formatMessage(entry), data);
  }

  error(message: string, error?: Error, data?: any): void {
    if (!this.shouldLog(LogLevel.ERROR)) return;
    
    const entry = this.createLogEntry(LogLevel.ERROR, message, data, error);
    this.addToBuffer(entry);
    
    console.error(this.formatMessage(entry), error, data);
    
    // In production, you might want to send this to an error tracking service
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorTracking(entry);
    }
  }

  private async sendToErrorTracking(entry: LogEntry): Promise<void> {
    try {
      // This would integrate with services like Sentry, LogRocket, etc.
      // For now, we'll store it locally and potentially sync later
      const errorData = {
        message: entry.message,
        stack: entry.error?.stack,
        timestamp: entry.timestamp,
        url: entry.url,
        userAgent: entry.userAgent,
        data: entry.data,
      };

      // Store in IndexedDB for later syncing
      if ('indexedDB' in window) {
        await this.storeErrorLocally(errorData);
      }
    } catch (error) {
      console.error('Failed to log error to tracking service:', error);
    }
  }

  private async storeErrorLocally(errorData: any): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('ErrorLogs', 1);
      
      request.onerror = () => reject(request.error);
      
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(['errors'], 'readwrite');
        const store = transaction.objectStore('errors');
        
        store.add({
          ...errorData,
          id: Date.now(),
        });
        
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      };
      
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('errors')) {
          const store = db.createObjectStore('errors', { keyPath: 'id' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
    });
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }

  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  // Download logs for debugging
  downloadLogs(): void {
    const logsText = this.logs
      .map(entry => {
        const formatted = this.formatMessage(entry);
        return entry.data ? `${formatted}\nData: ${JSON.stringify(entry.data, null, 2)}\n` : formatted;
      })
      .join('\n');

    const blob = new Blob([logsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zhwane-driving-logs-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

// Create a singleton logger instance
const logger = new Logger(
  process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO
);

export default logger;

// Helper function for API error logging
export function logApiError(endpoint: string, error: Error, requestData?: any): void {
  logger.error(`API Error: ${endpoint}`, error, {
    endpoint,
    requestData,
    status: (error as any).status,
    statusText: (error as any).statusText,
  });
}

// Helper function for component error logging
export function logComponentError(componentName: string, error: Error, props?: any): void {
  logger.error(`Component Error: ${componentName}`, error, {
    componentName,
    props,
  });
} 