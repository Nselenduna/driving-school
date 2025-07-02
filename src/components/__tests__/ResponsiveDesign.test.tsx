import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Mock for responsive testing
const mockMatchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(mockMatchMedia),
});

// Mock Navigation component for responsive testing
const MockResponsiveNav = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white/90 shadow-sm fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg">
                <span className="text-2xl font-bold text-white">L</span>
              </div>
              {isMobile ? (
                <span className="ml-2 text-lg font-semibold text-gray-900 sm:hidden">ZHWANE</span>
              ) : (
                <span className="ml-3 text-xl font-semibold text-gray-900 hidden sm:block">ZHWANE DRIVING SCHOOL</span>
              )}
            </a>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <a href="/">Home</a>
              <a href="/fleet">Our Fleet</a>
              <a href="/blog">Blog</a>
              <a href="/book">Book Now</a>
              <a href="/share">Share</a>
            </div>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <div className="md:hidden flex items-center">
                             <button
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                 className="inline-flex items-center justify-center p-3 rounded-md text-gray-900 hover:text-red-600 hover:bg-gray-100"
                 aria-expanded={isMobileMenuOpen ? "true" : "false"}
               >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-xl border-t border-gray-200">
            <a href="/" className="block px-3 py-3">Home</a>
            <a href="/fleet" className="block px-3 py-3">Our Fleet</a>
            <a href="/blog" className="block px-3 py-3">Blog</a>
            <a href="/book" className="block px-3 py-3">Book Now</a>
            <a href="/share" className="block px-3 py-3">Share</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Mock Hero Section for responsive testing
const MockHeroSection = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={isMobile ? "text-4xl font-bold text-white mb-6" : "text-5xl md:text-6xl font-bold text-white mb-6"}>
          Learn to Drive with
          <span className="block text-red-500">Confidence</span>
        </h1>
        <p className={isMobile ? "text-lg text-gray-200 max-w-xl mx-auto mb-8" : "text-xl text-gray-200 max-w-2xl mx-auto mb-8"}>
          Professional, patient instruction tailored to your learning style. 
          Our experienced instructors are here to guide you every step of the way.
        </p>
        <div className={isMobile ? "flex flex-col gap-4 justify-center" : "flex flex-col sm:flex-row gap-4 justify-center"}>
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

describe('Responsive Design Tests', () => {
  describe('Navigation Responsive Behavior', () => {
    test('desktop navigation shows full brand name', () => {
      render(<MockResponsiveNav isMobile={false} />);
      expect(screen.getByText('ZHWANE DRIVING SCHOOL')).toBeInTheDocument();
      expect(screen.queryByText('ZHWANE')).not.toBeInTheDocument();
    });

    test('mobile navigation shows shortened brand name', () => {
      render(<MockResponsiveNav isMobile={true} />);
      expect(screen.getByText('ZHWANE')).toBeInTheDocument();
      expect(screen.queryByText('ZHWANE DRIVING SCHOOL')).not.toBeInTheDocument();
    });

    test('desktop navigation shows all menu items inline', () => {
      render(<MockResponsiveNav isMobile={false} />);
      
      // All nav items should be visible
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Our Fleet')).toBeInTheDocument();
      expect(screen.getByText('Blog')).toBeInTheDocument();
      expect(screen.getByText('Book Now')).toBeInTheDocument();
      expect(screen.getByText('Share')).toBeInTheDocument();
      
      // No mobile menu button
      expect(screen.queryByText('Open main menu')).not.toBeInTheDocument();
    });

    test('mobile navigation shows hamburger menu button', () => {
      render(<MockResponsiveNav isMobile={true} />);
      
      // Mobile menu button should be present
      expect(screen.getByText('Open main menu')).toBeInTheDocument();
      
      // Navigation items should not be visible initially
      const navItems = screen.queryAllByText('Home');
      expect(navItems.length).toBe(0);
    });

    test('mobile menu can be opened and shows navigation items', () => {
      render(<MockResponsiveNav isMobile={true} />);
      
      const menuButton = screen.getByText('Open main menu');
      fireEvent.click(menuButton);
      
      // After clicking, navigation items should be visible
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Our Fleet')).toBeInTheDocument();
      expect(screen.getByText('Blog')).toBeInTheDocument();
      expect(screen.getByText('Book Now')).toBeInTheDocument();
      expect(screen.getByText('Share')).toBeInTheDocument();
    });
  });

  describe('Hero Section Responsive Behavior', () => {
    test('desktop hero uses larger text sizes', () => {
      render(<MockHeroSection isMobile={false} />);
      
      const heading = screen.getByText('Learn to Drive with');
      expect(heading).toHaveClass('text-5xl', 'md:text-6xl');
    });

    test('mobile hero uses smaller text sizes', () => {
      render(<MockHeroSection isMobile={true} />);
      
      const heading = screen.getByText('Learn to Drive with');
      expect(heading).toHaveClass('text-4xl');
      expect(heading).not.toHaveClass('text-5xl', 'md:text-6xl');
    });

    test('desktop hero shows buttons in row layout', () => {
      render(<MockHeroSection isMobile={false} />);
      
      const buttonContainer = screen.getByText('Book Your First Lesson').parentElement;
      expect(buttonContainer).toHaveClass('sm:flex-row');
    });

    test('mobile hero shows buttons in column layout', () => {
      render(<MockHeroSection isMobile={true} />);
      
      const buttonContainer = screen.getByText('Book Your First Lesson').parentElement;
      expect(buttonContainer).toHaveClass('flex-col');
      expect(buttonContainer).not.toHaveClass('sm:flex-row');
    });

    test('mobile hero has narrower max width for text', () => {
      render(<MockHeroSection isMobile={true} />);
      
      const description = screen.getByText(/Professional, patient instruction/);
      expect(description).toHaveClass('max-w-xl');
    });

    test('desktop hero has wider max width for text', () => {
      render(<MockHeroSection isMobile={false} />);
      
      const description = screen.getByText(/Professional, patient instruction/);
      expect(description).toHaveClass('max-w-2xl');
    });
  });

  describe('Common Responsive Issues', () => {
    test('text content is the same between mobile and desktop', () => {
      const { unmount } = render(<MockHeroSection isMobile={false} />);
      const desktopText = screen.getByText(/Professional, patient instruction/);
      const desktopTextContent = desktopText.textContent;
      unmount();

      render(<MockHeroSection isMobile={true} />);
      const mobileText = screen.getByText(/Professional, patient instruction/);
      const mobileTextContent = mobileText.textContent;

      expect(desktopTextContent).toBe(mobileTextContent);
    });

    test('all action buttons are present on both mobile and desktop', () => {
      // Test desktop
      const { unmount } = render(<MockHeroSection isMobile={false} />);
      expect(screen.getByText('Book Your First Lesson')).toBeInTheDocument();
      expect(screen.getByText('Share')).toBeInTheDocument();
      unmount();

      // Test mobile
      render(<MockHeroSection isMobile={true} />);
      expect(screen.getByText('Book Your First Lesson')).toBeInTheDocument();
      expect(screen.getByText('Share')).toBeInTheDocument();
    });
  });
}); 