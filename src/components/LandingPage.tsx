import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/heropicture.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Blur Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(1px)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Learn to Drive with
            <span className="block text-red-500">Confidence</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Professional, patient instruction tailored to your learning style. 
            Our experienced instructors are here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
            >
              Book Your First Lesson
            </Link>
            <Link
              to="/share"
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300 transform hover:scale-105"
            >
              Share
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Your Journey to the Road Starts Here</p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-lg mb-5">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Instructors</h3>
                  <p className="text-gray-600">
                    Learn from certified professionals with years of teaching experience and a passion for safe driving.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-lg mb-5">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Schedule</h3>
                  <p className="text-gray-600">
                    Book lessons at times that work best for you, including evenings and weekends.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-lg mb-5">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">High Pass Rate</h3>
                  <p className="text-gray-600">
                    Proven track record of student success with over 95% pass rate on the first attempt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Pricing Plans</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">Choose Your Learning Path</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Starter Package */}
            <div className="bg-white rounded-lg shadow-md p-8 border-2 border-gray-100 hover:border-red-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Starter Package</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">£299</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  5 Driving Lessons
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Theory Test Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Online Learning Materials
                </li>
              </ul>
              <Link
                to="/book"
                className="block w-full bg-red-600 text-white text-center rounded-lg py-3 hover:bg-red-700 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-red-500 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Package</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">£549</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  10 Driving Lessons
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Theory & Practical Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mock Test
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Premium Learning Materials
                </li>
              </ul>
              <Link
                to="/book"
                className="block w-full bg-red-600 text-white text-center rounded-lg py-3 hover:bg-red-700 transition-colors duration-300"
              >
                Choose Plan
              </Link>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-md p-8 border-2 border-gray-100 hover:border-red-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Package</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">£799</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  15 Driving Lessons
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Comprehensive Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  2 Mock Tests
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  VIP Learning Materials
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority Booking
                </li>
              </ul>
              <Link
                to="/book"
                className="block w-full bg-red-600 text-white text-center rounded-lg py-3 hover:bg-red-700 transition-colors duration-300"
              >
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 