import React from 'react';
import './App.css';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import QRShare from './components/QRShare';
import LandingPage from './components/LandingPage';

// Navigation component with active state
const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white/90 shadow-sm fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg">
              <span className="text-2xl font-bold text-white">L</span>
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900">ZHWANE DRIVING SCHOOL</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-gray-600 hover:text-red-600 ${
              location.pathname === '/' ? 'text-red-600' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/book"
            className={`text-gray-600 hover:text-red-600 ${
              location.pathname === '/book' ? 'text-red-600' : ''
            }`}
          >
            Book Now
          </Link>
          <Link
            to="/share"
            className={`text-gray-600 hover:text-red-600 ${
              location.pathname === '/share' ? 'text-red-600' : ''
            }`}
          >
            Share
          </Link>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/book" element={<BookingForm />} />
            <Route path="/share" element={<QRShare />} />
          </Routes>
        </div>

        <footer className="bg-white mt-auto">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Zhwane Driving School. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
