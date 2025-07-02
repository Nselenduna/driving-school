import React, { useState, useCallback, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useResponsive();

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const navigateTo = useCallback((path: string) => {
    setIsOpen(false);
    navigate(path);
  }, [navigate]);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={() => navigateTo('/')}
                className="flex items-center"
              >
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg">
                  <span className="text-2xl font-bold text-white">L</span>
                </div>
                <span className={`ml-3 text-white text-lg font-semibold ${isMobile ? 'hidden' : 'block'}`}>
                  ZHWANE DRIVING SCHOOL
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`${isMobile ? 'hidden' : 'block'}`}>
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => navigateTo(link.to)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(link.to) 
                      ? 'bg-red-600 text-white' 
                      : 'text-gray-300 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  {link.text}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className={`${isMobile ? 'block' : 'hidden'}`}>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen && isMobile ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => navigateTo(link.to)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.to) 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-300 hover:bg-red-500 hover:text-white'
              }`}
            >
              {link.text}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default memo(ResponsiveNavigation); 