import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 shadow-sm fixed w-full z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg">
              <span className="text-2xl font-bold text-white">L</span>
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900">ZHWANE DRIVING SCHOOL</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#courses" className="text-gray-600 hover:text-red-600">Courses</a>
            <a href="#instructors" className="text-gray-600 hover:text-red-600">Instructors</a>
            <a href="#pricing" className="text-gray-600 hover:text-red-600">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-red-600">Contact</a>
          </div>
        </div>
      </nav>

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
            <a
              href="#book-lesson"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
            >
              Book Your First Lesson
            </a>
            <a
              href="#learn-more"
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
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
              <button className="w-full bg-red-600 text-white rounded-lg py-3 hover:bg-red-700 transition-colors duration-300">
                Get Started
              </button>
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
              <button className="w-full bg-red-600 text-white rounded-lg py-3 hover:bg-red-700 transition-colors duration-300">
                Choose Plan
              </button>
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
                  Complete Test Preparation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  2 Mock Tests
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Test Day Support
                </li>
              </ul>
              <button className="w-full bg-red-600 text-white rounded-lg py-3 hover:bg-red-700 transition-colors duration-300">
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">What Our Students Say</p>
            <p className="mt-4 text-lg text-gray-500">Don't just take our word for it - hear from our successful students</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Sarah Johnson"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
                  <p className="text-green-600 font-medium">Passed First Time</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-600 italic">
                "The instructors at Sithole Driving School were incredibly patient and professional. 
                Their structured approach helped me pass my test first time! I couldn't recommend them enough."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/45.jpg" 
                    alt="James Smith"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">James Smith</h3>
                  <p className="text-green-600 font-medium">Passed First Time</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-600 italic">
                "As a nervous driver, I was worried about learning to drive. The team here made me feel 
                comfortable from day one. Their patience and expertise made all the difference."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Emily Chen"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Emily Chen</h3>
                  <p className="text-green-600 font-medium">Intensive Course Graduate</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-600 italic">
                "I took their intensive course and passed within weeks! The instructors are knowledgeable 
                and the learning materials were extremely helpful. Best driving school in the area!"
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <a
              href="#book-lesson"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>

      {/* Instructor Profiles Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Instructors</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">Meet Our Expert Team</p>
            <p className="mt-4 text-lg text-gray-500">Learn from experienced, DVSA-approved driving instructors</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Instructor 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src="mthoko pic.png"
                  alt="Mthokozisi Dube"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mthokozisi Dube</h3>
                <p className="text-red-600 font-medium mb-3">Senior Instructor</p>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>15+ years of experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Automatic & Manual Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Nervous Driver Specialist</span>
                  </div>
                </div>
                <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors duration-300 border border-gray-200">
                  View Profile
                </button>
              </div>
            </div>

            {/* Instructor 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src="sithole pic.png"
                  alt="Melisizwe Sithole"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Melisizwe Sithole</h3>
                <p className="text-red-600 font-medium mb-3">Lead Instructor</p>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>12 years of experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Pass Plus Certified</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Intensive Course Expert</span>
                  </div>
                </div>
                <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors duration-300 border border-gray-200">
                  View Profile
                </button>
              </div>
            </div>

            {/* Instructor 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src="bheki pic.png"
                  alt="Bhekisipho Ndlovu"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bhekisipho Ndlovu</h3>
                <p className="text-red-600 font-medium mb-3">Theory Test Specialist</p>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>8 years of experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Theory Test Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Multilingual Instruction</span>
                  </div>
                </div>
                <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors duration-300 border border-gray-200">
                  View Profile
                </button>
              </div>
            </div>
          </div>

          {/* Team CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Our instructors are ready to help you achieve your driving goals</p>
            <a
              href="#book-lesson"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
            >
              Book With An Instructor
            </a>
          </div>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Courses</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">Comprehensive Driving Education</p>
            <p className="mt-4 text-lg text-gray-500">Choose the learning path that best suits your needs</p>
          </div>

          <div className="mt-12">
            {/* Standard Course */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 bg-red-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Standard Course</h3>
                  <p className="mb-4">Perfect for new learners who want a thorough, structured approach to learning</p>
                  <div className="inline-block bg-red-700 px-4 py-2 rounded-lg">
                    20-30 Hours Recommended
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Course Includes:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Full DVSA curriculum coverage</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Theory test preparation</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Hazard perception training</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Mock practical tests</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">You'll Learn:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Vehicle control and maneuvers</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Road safety and awareness</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Independent driving skills</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Defensive driving techniques</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intensive Course */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 bg-red-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Intensive Course</h3>
                  <p className="mb-4">Accelerated learning program for those who want to pass quickly</p>
                  <div className="inline-block bg-red-700 px-4 py-2 rounded-lg">
                    2-3 Weeks Duration
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Course Includes:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>40 hours of intensive training</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Fast-track theory test booking</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Practical test booking included</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Daily progress assessments</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Students on holiday breaks</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Job requirement deadlines</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Quick learners</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Those with some experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Refresher Course */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 bg-red-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Refresher Course</h3>
                  <p className="mb-4">Rebuild your confidence and update your driving skills</p>
                  <div className="inline-block bg-red-700 px-4 py-2 rounded-lg">
                    Flexible Hours
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Perfect For:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Returning drivers</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>International license holders</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Confidence building</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Skills update</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Focuses On:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>UK driving regulations</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Modern driving techniques</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Highway driving</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Urban navigation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Not sure which course is right for you? Get in touch for a consultation</p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Contact/Booking Form Section */}
      <div className="py-12 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">GET STARTED</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">Book Your Driving Course</p>
            <p className="mt-4 text-lg text-gray-500">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <form 
              className="space-y-8"
              aria-label="Driving course booking form"
            >
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-sm text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700">
                      Phone number
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Details */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Course Details</h3>
                <div className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="course-type" className="block text-sm text-gray-700">
                      Course Type
                    </label>
                    <div className="mt-1">
                      <select
                        id="course-type"
                        name="course-type"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select a course</option>
                        <option value="standard">Standard Course (20-30 Hours)</option>
                        <option value="intensive">Intensive Course (2-3 Weeks)</option>
                        <option value="refresher">Refresher Course</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferred-instructor" className="block text-sm text-gray-700">
                      Preferred Instructor <span className="text-red-600 text-sm">(Optional)</span>
                    </label>
                    <div className="mt-1">
                      <select
                        id="preferred-instructor"
                        name="preferred-instructor"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">No preference</option>
                        <option value="mthokozisi">Mthokozisi Dube</option>
                        <option value="melisizwe">Melisizwe Sithole</option>
                        <option value="bhekisipho">Bhekisipho Ndlovu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm text-gray-700">
                      Preferred Learning Times
                    </label>
                    <div className="mt-1">
                      <select
                        id="availability"
                        name="availability"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select preferred time</option>
                        <option value="weekday-morning">Weekday Mornings</option>
                        <option value="weekday-afternoon">Weekday Afternoons</option>
                        <option value="weekday-evening">Weekday Evenings</option>
                        <option value="weekend">Weekends</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700">
                      Additional Information
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        placeholder="Tell us about your driving experience, specific requirements, or any questions you have..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <p className="text-gray-500">
                    By selecting this, you agree to our{' '}
                    <a href="#" className="font-medium text-red-600 hover:text-red-500">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-red-600 hover:text-red-500">
                      Terms of Service
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your journey?</span>
            <span className="block text-red-200">Get your license with confidence.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#get-started" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#courses" className="text-gray-300 hover:text-white">Courses</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white">FAQ</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">123 Drive Street</li>
                <li className="text-gray-300">London, UK</li>
                <li className="text-gray-300">+44 123 456 7890</li>
                <li className="text-gray-300">info@drivemaster.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#facebook" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#twitter" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#instagram" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 DriveMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
