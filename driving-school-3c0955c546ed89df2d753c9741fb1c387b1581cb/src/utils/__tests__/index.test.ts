import {
  formatDate,
  formatPhoneNumber,
  validateEmail,
  validatePhoneNumber,
  debounce,
  throttle,
} from '../index';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    it('should format date strings correctly', () => {
      const result = formatDate('2024-03-15');
      expect(result).toBe('15 March 2024');
    });

    it('should format Date objects correctly', () => {
      const date = new Date('2024-03-15');
      const result = formatDate(date);
      expect(result).toBe('15 March 2024');
    });
  });

  describe('formatPhoneNumber', () => {
    it('should format UK landline numbers', () => {
      expect(formatPhoneNumber('01234567890')).toBe('01 2345 67890');
    });

    it('should format UK mobile numbers', () => {
      expect(formatPhoneNumber('07377712688')).toBe('07377 712688');
    });

    it('should return original number if no pattern matches', () => {
      expect(formatPhoneNumber('123')).toBe('123');
    });

    it('should handle numbers with existing formatting', () => {
      expect(formatPhoneNumber('0123 456 7890')).toBe('01 2345 67890');
    });
  });

  describe('validateEmail', () => {
    it('should validate correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
      expect(validateEmail('test@domain')).toBe(false);
    });
  });

  describe('validatePhoneNumber', () => {
    it('should validate UK phone numbers', () => {
      expect(validatePhoneNumber('07377712688')).toBe(true);
      expect(validatePhoneNumber('01234567890')).toBe(true);
      expect(validatePhoneNumber('+447377712688')).toBe(true);
    });

    it('should handle formatted phone numbers', () => {
      expect(validatePhoneNumber('07377 712688')).toBe(true);
      expect(validatePhoneNumber('0123 456 7890')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(validatePhoneNumber('123')).toBe(false);
      expect(validatePhoneNumber('12345678901234')).toBe(false);
    });
  });

  describe('debounce', () => {
    jest.useFakeTimers();

    it('should debounce function calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('call1');
      debouncedFn('call2');
      debouncedFn('call3');

      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('call3');
    });

    afterEach(() => {
      jest.clearAllTimers();
    });
  });

  describe('throttle', () => {
    jest.useFakeTimers();

    it('should throttle function calls', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 100);

      throttledFn('call1');
      throttledFn('call2');
      throttledFn('call3');

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('call1');

      jest.advanceTimersByTime(100);

      throttledFn('call4');
      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(mockFn).toHaveBeenCalledWith('call4');
    });

    afterEach(() => {
      jest.clearAllTimers();
    });
  });
}); 