import logger, { LogLevel } from '../logger';

// Mock console methods
const originalConsole = { ...console };

beforeEach(() => {
  // Clear logs before each test
  logger.clearLogs();
  
  // Mock console methods
  console.debug = jest.fn();
  console.info = jest.fn();
  console.warn = jest.fn();
  console.error = jest.fn();
});

afterEach(() => {
  // Restore console methods
  Object.assign(console, originalConsole);
});

describe('Logger', () => {
  describe('Log Level Filtering', () => {
    it('should respect log level filtering', () => {
      logger.setLogLevel(LogLevel.WARN);
      
      logger.debug('debug message');
      logger.info('info message');
      logger.warn('warn message');
      logger.error('error message');
      
      expect(console.debug).not.toHaveBeenCalled();
      expect(console.info).not.toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(
        expect.stringContaining('WARN: warn message'),
        undefined
      );
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('ERROR: error message'),
        undefined,
        undefined
      );
    });

    it('should log debug messages in development mode', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';
      
      logger.setLogLevel(LogLevel.DEBUG);
      logger.debug('debug message', { test: 'data' });
      
      expect(console.debug).toHaveBeenCalledWith(
        expect.stringContaining('DEBUG: debug message'),
        { test: 'data' }
      );
      
      process.env.NODE_ENV = originalNodeEnv;
    });
  });

  describe('Log Storage', () => {
    it('should store logs in buffer', () => {
      logger.setLogLevel(LogLevel.DEBUG);
      
      logger.info('test message');
      logger.warn('warning message');
      
      const logs = logger.getLogs();
      expect(logs).toHaveLength(2);
      expect(logs[0].message).toBe('test message');
      expect(logs[1].message).toBe('warning message');
    });

    it('should clear logs when requested', () => {
      logger.info('test message');
      expect(logger.getLogs()).toHaveLength(1);
      
      logger.clearLogs();
      expect(logger.getLogs()).toHaveLength(0);
    });

    it('should limit log buffer size', () => {
      logger.setLogLevel(LogLevel.DEBUG);
      
      // Add more logs than the buffer size (100)
      for (let i = 0; i < 105; i++) {
        logger.info(`message ${i}`);
      }
      
      const logs = logger.getLogs();
      expect(logs.length).toBeLessThanOrEqual(100);
      expect(logs[0].message).toBe('message 5'); // Oldest should be removed
    });
  });

  describe('Error Logging', () => {
    it('should log errors with stack traces', () => {
      const testError = new Error('Test error');
      logger.error('Error occurred', testError, { context: 'test' });
      
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('ERROR: Error occurred'),
        testError,
        { context: 'test' }
      );
      
      const logs = logger.getLogs();
      expect(logs[0].error).toBe(testError);
    });
  });

  describe('Log Entry Structure', () => {
    it('should create properly structured log entries', () => {
      logger.info('test message', { key: 'value' });
      
      const logs = logger.getLogs();
      const entry = logs[0];
      
      expect(entry).toMatchObject({
        level: LogLevel.INFO,
        message: 'test message',
        data: { key: 'value' },
        timestamp: expect.any(String),
        userAgent: expect.any(String),
        url: expect.any(String),
      });
    });
  });
}); 