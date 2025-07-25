import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useResponsive } from '../hooks/useResponsive';

interface NavLink {
  to: string;
  text: string;
}

const navLinks: NavLink[] = [
  { to: '/', text: 'Home' },
  { to: '/fleet', text: 'Our Fleet' },
  { to: '/blog', text: 'Blog' },
  { to: '/book', text: 'Book Now' },
  { to: '/share', text: 'Share' }
];

const ResponsiveNavigation: React.FC = () => {
  const location = useLocation();
  const { isMobile, isSmallScreen, width } = useResponsive();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Ensure we're initialized to prevent flash of wrong content
  useEffect(() => {
    // Faster initialization for better UX
    const timer = setTimeout(() => setIsInitialized(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleTouchOutside = (event: TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleTouchOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const NavLinkComponent = ({ to, text, className = "", onClick }: NavLink & { className?: string; onClick?: () => void }) => (
    <Link
      to={to}
      className={`text-gray-300 hover:text-red-400 transition-colors duration-200 ${
        (to === '/' && location.pathname === '/') ||
        (to !== '/' && location.pathname.startsWith(to))
          ? 'text-red-400 font-semibold'
          : ''
      } ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Determine brand text based on screen size
  const getBrandText = () => {
    if (!isInitialized) return 'ZHWANE DRIVING SCHOOL'; // Default during initialization
    return isSmallScreen ? 'ZHWANE DRIVING' : 'ZHWANE DRIVING SCHOOL';
  };

  // Determine if we should show mobile layout
  const shouldShowMobileLayout = isInitialized && isMobile;
  const shouldShowDesktopLayout = isInitialized && !isMobile;

  return (
    <>
      <nav className="bg-[#1a1f2e]/95 shadow-sm fixed w-full z-50 backdrop-blur-sm border-b border-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group" onClick={closeMobileMenu}>
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg group-hover:bg-red-700 transition-colors duration-200">
                  <span className="text-2xl font-bold text-white">L</span>
                </div>
                <span className={`ml-3 font-semibold text-white transition-all duration-200 ${
                  isSmallScreen ? 'text-lg' : 'text-xl'
                }`}>
                  {getBrandText()}
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Only show when initialized and on desktop */}
            {shouldShowDesktopLayout && (
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <NavLinkComponent key={link.to} {...link} />
                ))}
              </div>
            )}

            {/* Mobile menu button - Only show when initialized and on mobile */}
            {shouldShowMobileLayout && (
              <div className="flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-200"
                  aria-expanded={isMobileMenuOpen ? "true" : "false"}
                  aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                >
                  <svg
                    className={`h-6 w-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {!isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    )}
                  </svg>
                </button>
              </div>
            )}

            {/* Loading state - show minimal navigation during initialization */}
            {!isInitialized && (
              <div className="flex items-center">
                <div className="w-6 h-6 opacity-50">
                  {/* Empty space during initialization */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu overlay - Only show for mobile */}
        {shouldShowMobileLayout && isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile menu - Only render for mobile */}
        {shouldShowMobileLayout && (
          <div
            ref={menuRef}
            className={`absolute top-16 left-0 w-full bg-[#1a1f2e] shadow-lg transform transition-transform duration-200 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.to} className="block py-2 border-b border-gray-100 last:border-b-0">
                  <NavLinkComponent
                    {...link}
                    className="text-lg block w-full py-2 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100"
                    onClick={closeMobileMenu}
                  />
                </div>
              ))}
              
              {/* Contact information */}
              <div className="pt-4 mt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-4 px-3">Get in touch</p>
                <div className="space-y-3">
                  <a
                    href="tel:07377712688"
                    className="flex items-center text-gray-300 hover:text-red-400 transition-colors duration-200 px-3 py-2"
                  >
                    <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    07377712688
                  </a>
                  <a
                    href="mailto:info@zhwanedrivingschool.com"
                    className="flex items-center text-gray-300 hover:text-red-400 transition-colors duration-200 px-3 py-2"
                  >
                    <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16" />

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-2 text-xs rounded z-50 opacity-75">
          Width: {width}px | Mobile: {isMobile ? 'Yes' : 'No'} | Small: {isSmallScreen ? 'Yes' : 'No'}
        </div>
      )}
    </>
  );
};

export default ResponsiveNavigation; 