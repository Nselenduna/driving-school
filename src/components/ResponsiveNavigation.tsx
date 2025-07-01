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
  const { isMobile, isSmallScreen } = useResponsive();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      className={`text-gray-600 hover:text-red-600 transition-colors duration-200 ${
        (to === '/' && location.pathname === '/') ||
        (to !== '/' && location.pathname.startsWith(to))
          ? 'text-red-600 font-semibold'
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

  return (
    <>
      <nav className="bg-white/95 shadow-sm fixed w-full z-50 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group" onClick={closeMobileMenu}>
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg group-hover:bg-red-700 transition-colors duration-200">
                  <span className="text-2xl font-bold text-white">L</span>
                </div>
                {/* Conditional brand text based on screen size */}
                                 <span className={`ml-2 font-semibold text-gray-900 transition-all duration-200 ${
                   isSmallScreen ? 'text-lg' : 'text-xl ml-3'
                 }`}>
                   {isSmallScreen ? 'ZHWANE DRIVING' : 'ZHWANE DRIVING SCHOOL'}
                 </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <NavLinkComponent key={link.to} {...link} />
                ))}
              </div>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <div className="flex items-center">
                                  <button
                   onClick={toggleMobileMenu}
                   className="inline-flex items-center justify-center p-3 rounded-md text-gray-900 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-200"
                   aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                >
                  <svg
                    className={`h-6 w-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
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
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobile && isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile menu */}
        {isMobile && (
          <div
            ref={menuRef}
            className={`absolute top-16 left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100 visible'
                : '-translate-y-full opacity-0 invisible'
            }`}
          >
            <div className="bg-white shadow-xl border-t border-gray-200 border-b border-gray-200 max-h-screen overflow-y-auto">
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <div
                    key={link.to}
                    className={`transform transition-all duration-300 ease-out ${
                      isMobileMenuOpen
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-full opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <NavLinkComponent
                      {...link}
                      className="block px-4 py-4 text-lg rounded-lg hover:bg-gray-50 active:bg-gray-100"
                      onClick={closeMobileMenu}
                    />
                  </div>
                ))}
                
                {/* Additional mobile menu items */}
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <div className="px-4 py-2">
                    <p className="text-sm text-gray-500 mb-4">Get in touch</p>
                    <div className="space-y-3">
                      <a
                        href="tel:07377712688"
                        className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-200"
                        onClick={closeMobileMenu}
                      >
                        <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        07377712688
                      </a>
                      <a
                        href="mailto:info@zhwanedrivingschool.com"
                        className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-200"
                        onClick={closeMobileMenu}
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
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16" />
    </>
  );
};

export default ResponsiveNavigation; 