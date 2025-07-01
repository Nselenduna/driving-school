import { useState, useEffect } from 'react';

// Breakpoints matching Tailwind CSS defaults
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type BreakpointKey = keyof typeof BREAKPOINTS;

interface ResponsiveState {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isSmallScreen: boolean;
  breakpoint: BreakpointKey | 'xs';
}

// Get initial dimensions safely
const getInitialDimensions = () => {
  if (typeof window !== 'undefined') {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  // Default to mobile-first approach
  return {
    width: 375, // iPhone standard width
    height: 667,
  };
};

export const useResponsive = (): ResponsiveState => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>(getInitialDimensions);

  useEffect(() => {
    // Immediate update on mount to ensure correct initial state
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Update immediately
    updateDimensions();

    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      // Debounce resize events to improve performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 50); // Reduced debounce time for faster response
    };

    window.addEventListener('resize', handleResize);
    
    // Also listen for orientation changes on mobile
    window.addEventListener('orientationchange', () => {
      // Orientation change needs a longer delay to get correct dimensions
      setTimeout(updateDimensions, 100);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', updateDimensions);
      clearTimeout(timeoutId);
    };
  }, []);

  const { width, height } = dimensions;

  // Determine current breakpoint
  const getBreakpoint = (width: number): BreakpointKey | 'xs' => {
    if (width >= BREAKPOINTS['2xl']) return '2xl';
    if (width >= BREAKPOINTS.xl) return 'xl';
    if (width >= BREAKPOINTS.lg) return 'lg';
    if (width >= BREAKPOINTS.md) return 'md';
    if (width >= BREAKPOINTS.sm) return 'sm';
    return 'xs';
  };

  const breakpoint = getBreakpoint(width);
  const isMobile = width < BREAKPOINTS.md; // < 768px
  const isTablet = width >= BREAKPOINTS.md && width < BREAKPOINTS.lg; // 768px - 1023px
  const isDesktop = width >= BREAKPOINTS.lg; // >= 1024px
  const isSmallScreen = width < BREAKPOINTS.sm; // < 640px

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    isSmallScreen,
    breakpoint,
  };
};

// Utility hook for media queries
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set initial value
    setMatches(mediaQuery.matches);

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [query]);

  return matches;
}; 