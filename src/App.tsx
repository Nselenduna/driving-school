import React from 'react';
import './App.css';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import QRShare from './components/QRShare';

// Navigation component with active state
const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <Link 
              to="/" 
              className="flex items-center text-xl font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span className="sr-only">Home</span>
              Driving School
            </Link>
            
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Book Now
              </Link>
              <Link
                to="/share"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/share'
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Share
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />

        <div className="py-10">
          <Routes>
            <Route path="/" element={<BookingForm />} />
            <Route path="/share" element={<QRShare />} />
          </Routes>
        </div>

        <footer className="bg-white mt-auto">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Driving School. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
