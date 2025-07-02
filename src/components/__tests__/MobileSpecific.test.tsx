import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Create a test that simulates mobile viewport and checks for information differences
const createMobileViewport = () => {
  // Mock viewport dimensions for mobile
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 375, // iPhone SE width
  });

  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 667, // iPhone SE height
  });

  // Mock matchMedia for mobile breakpoints
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: query.includes('(max-width: 768px)') || query.includes('(max-width: 640px)'),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  // Trigger resize event
  fireEvent(window, new Event('resize'));
};

const createDesktopViewport = () => {
  // Mock viewport dimensions for desktop
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1920,
  });

  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 1080,
  });

  // Mock matchMedia for desktop breakpoints
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: query.includes('(min-width: 768px)') || query.includes('(min-width: 1024px)'),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  fireEvent(window, new Event('resize'));
};

// Mock components based on actual implementation
const ActualNavigationBehavior = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div>
      {/* This replicates the actual navigation behavior */}
      <nav className="bg-white/90 shadow-sm fixed w-full z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg">
                  <span className="text-2xl font-bold text-white">L</span>
                </div>
                {/* Key Issue: Two different brand texts that show/hide based on screen size */}
                <span className="ml-2 text-lg font-semibold text-gray-900 sm:hidden">ZHWANE</span>
                <span className="ml-3 text-xl font-semibold text-gray-900 hidden sm:block">ZHWANE DRIVING SCHOOL</span>
              </a>
            </div>

            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/">Home</a>
              <a href="/fleet">Our Fleet</a>
              <a href="/blog">Blog</a>
              <a href="/book">Book Now</a>
              <a href="/share">Share</a>
            </div>

            {/* Mobile menu button - only visible on mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-3 rounded-md text-gray-900"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - only shows when hamburger is clicked */}
        <div className={`md:hidden absolute top-16 left-0 right-0 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-xl border-t border-gray-200">
            <a href="/" className="block px-3 py-3">Home</a>
            <a href="/fleet" className="block px-3 py-3">Our Fleet</a>
            <a href="/blog" className="block px-3 py-3">Blog</a>
            <a href="/book" className="block px-3 py-3">Book Now</a>
            <a href="/share" className="block px-3 py-3">Share</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

const ActualHeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero title - different sizes for mobile vs desktop */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Learn to Drive with
          <span className="block text-red-500">Confidence</span>
        </h1>
        {/* Description - same max-width for all devices */}
        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Professional, patient instruction tailored to your learning style. 
          Our experienced instructors are here to guide you every step of the way.
        </p>
        {/* Buttons - stack on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/book" className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold">
            Book Your First Lesson
          </a>
          <a href="/share" className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold">
            Share
          </a>
        </div>
      </div>
    </div>
  );
};

describe('Mobile vs Desktop Information Differences', () => {
  beforeEach(() => {
    // Reset viewport to default before each test
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  describe('Brand Name Differences', () => {
    test('mobile shows shortened brand name "ZHWANE"', () => {
      createMobileViewport();
      render(<ActualNavigationBehavior />);
      
      // Mobile should show shortened version
      expect(screen.getByText('ZHWANE')).toBeInTheDocument();
      expect(screen.queryByText('ZHWANE DRIVING SCHOOL')).not.toBeInTheDocument();
    });

    test('desktop shows full brand name "ZHWANE DRIVING SCHOOL"', () => {
      createDesktopViewport();
      render(<ActualNavigationBehavior />);
      
      // Desktop should show full version
      expect(screen.getByText('ZHWANE DRIVING SCHOOL')).toBeInTheDocument();
      expect(screen.queryByText('ZHWANE')).not.toBeInTheDocument();
    });
  });

  describe('Navigation Menu Differences', () => {
    test('mobile hides navigation links behind hamburger menu', () => {
      createMobileViewport();
      render(<ActualNavigationBehavior />);
      
      // Hamburger button should be visible
      expect(screen.getByRole('button', { name: /open main menu/i })).toBeInTheDocument();
      
      // Navigation links should not be immediately visible
      expect(screen.queryByText('Home')).not.toBeInTheDocument();
      expect(screen.queryByText('Our Fleet')).not.toBeInTheDocument();
    });

    test('desktop shows all navigation links inline', () => {
      createDesktopViewport();
      render(<ActualNavigationBehavior />);
      
      // All navigation links should be visible
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Our Fleet')).toBeInTheDocument();
      expect(screen.getByText('Blog')).toBeInTheDocument();
      expect(screen.getByText('Book Now')).toBeInTheDocument();
      expect(screen.getByText('Share')).toBeInTheDocument();
      
      // Hamburger menu should not be visible
      expect(screen.queryByRole('button', { name: /open main menu/i })).not.toBeInTheDocument();
    });

    test('mobile hamburger menu reveals navigation when clicked', () => {
      createMobileViewport();
      render(<ActualNavigationBehavior />);
      
      // Initially no nav links visible
      expect(screen.queryByText('Home')).not.toBeInTheDocument();
      
      // Click hamburger menu
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      fireEvent.click(menuButton);
      
      // Now navigation links should be visible
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Our Fleet')).toBeInTheDocument();
      expect(screen.getByText('Blog')).toBeInTheDocument();
      expect(screen.getByText('Book Now')).toBeInTheDocument();
      expect(screen.getByText('Share')).toBeInTheDocument();
    });
  });

  describe('Hero Section Typography Differences', () => {
    test('mobile uses smaller hero text (text-5xl)', () => {
      createMobileViewport();
      render(<ActualHeroSection />);
      
      const heroTitle = screen.getByText('Learn to Drive with');
      // On mobile, it should use text-5xl as the base size
      expect(heroTitle).toHaveClass('text-5xl');
    });

    test('desktop uses larger hero text (md:text-6xl)', () => {
      createDesktopViewport();
      render(<ActualHeroSection />);
      
      const heroTitle = screen.getByText('Learn to Drive with');
      // Should have both classes but md:text-6xl takes precedence on desktop
      expect(heroTitle).toHaveClass('text-5xl', 'md:text-6xl');
    });
  });

  describe('Button Layout Differences', () => {
    test('mobile stacks buttons vertically (flex-col)', () => {
      createMobileViewport();
      render(<ActualHeroSection />);
      
      const buttonContainer = screen.getByText('Book Your First Lesson').parentElement;
      expect(buttonContainer).toHaveClass('flex-col');
    });

    test('desktop arranges buttons horizontally (sm:flex-row)', () => {
      createDesktopViewport();
      render(<ActualHeroSection />);
      
      const buttonContainer = screen.getByText('Book Your First Lesson').parentElement;
      expect(buttonContainer).toHaveClass('flex-col', 'sm:flex-row');
    });
  });

  describe('Content Accessibility', () => {
    test('all essential information is available on both mobile and desktop', () => {
      // Test mobile
      createMobileViewport();
      const { unmount: unmountMobile } = render(
        <div>
          <ActualNavigationBehavior />
          <ActualHeroSection />
        </div>
      );
      
      // Brand should be visible (shortened)
      expect(screen.getByText('ZHWANE')).toBeInTheDocument();
      
      // Hero content should be present
      expect(screen.getByText('Learn to Drive with')).toBeInTheDocument();
      expect(screen.getByText(/Professional, patient instruction/)).toBeInTheDocument();
      expect(screen.getByText('Book Your First Lesson')).toBeInTheDocument();
      
      // Navigation should be accessible via hamburger
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      fireEvent.click(menuButton);
      expect(screen.getByText('Home')).toBeInTheDocument();
      
      unmountMobile();
      
      // Test desktop
      createDesktopViewport();
      render(
        <div>
          <ActualNavigationBehavior />
          <ActualHeroSection />
        </div>
      );
      
      // Brand should be visible (full)
      expect(screen.getByText('ZHWANE DRIVING SCHOOL')).toBeInTheDocument();
      
      // Same hero content should be present
      expect(screen.getByText('Learn to Drive with')).toBeInTheDocument();
      expect(screen.getByText(/Professional, patient instruction/)).toBeInTheDocument();
      expect(screen.getByText('Book Your First Lesson')).toBeInTheDocument();
      
      // Navigation should be directly visible
      expect(screen.getByText('Home')).toBeInTheDocument();
    });
  });

  describe('Common Mobile Issues to Check', () => {
    test('text remains readable on small screens', () => {
      createMobileViewport();
      render(<ActualHeroSection />);
      
      // Check that text elements have appropriate responsive classes
      const description = screen.getByText(/Professional, patient instruction/);
      expect(description).toHaveClass('text-xl'); // Should be readable on mobile
      
      const heroTitle = screen.getByText('Learn to Drive with');
      expect(heroTitle).toHaveClass('text-5xl'); // Should be large enough but not overwhelming
    });

    test('buttons are touch-friendly on mobile', () => {
      createMobileViewport();
      render(<ActualHeroSection />);
      
      const bookButton = screen.getByText('Book Your First Lesson');
      expect(bookButton).toHaveClass('px-8', 'py-4'); // Good touch target size
      
      const shareButton = screen.getByText('Share');
      expect(shareButton).toHaveClass('px-8', 'py-4'); // Good touch target size
    });

    test('mobile menu state management works correctly', () => {
      createMobileViewport();
      render(<ActualNavigationBehavior />);
      
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      
      // Initially closed
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByText('Home')).not.toBeInTheDocument();
      
      // Open menu
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('Home')).toBeInTheDocument();
      
      // Close menu
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByText('Home')).not.toBeInTheDocument();
    });
  });
}); 