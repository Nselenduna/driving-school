import React from 'react';
import './App.css';
import Blog, { sampleBlogPosts } from './components/Blog';
import BlogPost from './components/BlogPost';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import QRShare from './components/QRShare';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-xl font-bold text-red-600">
                    Driving School
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600"
                  >
                    Book Now
                  </Link>
                  <Link
                    to="/share"
                    className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600"
                  >
                    Share
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

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
