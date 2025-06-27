import React from 'react';

const Fleet: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Fleet</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">Training Vehicles for Every License Class</p>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            From learner vehicles to specialized commercial equipment, we have the right vehicle for your training needs
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Small Sedan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop"
                alt="Small Sedan"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Small Sedan</h3>
              <p className="text-gray-600 mb-4">
                Perfect for beginners. Our compact sedans are easy to maneuver and ideal for learning the basics of driving.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Power Steering</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dual Controls</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Automatic & Manual Options</span>
                </div>
              </div>
            </div>
          </div>

          {/* Motorcycle */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop"
                alt="Motorcycle"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Motorcycle</h3>
              <p className="text-gray-600 mb-4">
                Learn to ride safely on our training motorcycles. Perfect for A1 and A2 license preparation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Various Engine Sizes</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Safety Equipment Provided</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Beginner Friendly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Truck */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1659630000995-e65aafc51c08?q=80&w=1000&auto=format&fit=crop"
                alt="Truck"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Truck</h3>
              <p className="text-gray-600 mb-4">
                For commercial license aspirants. Train on modern trucks equipped with the latest safety features.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Air Brakes</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Professional Grade</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Load Training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bus */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop"
                alt="Bus"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Passenger Bus</h3>
              <p className="text-gray-600 mb-4">
                Specialized training for bus driver certification. Learn to safely transport passengers in our modern buses.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Passenger Safety Training</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Route Planning</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Public Transport Regulations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Construction Equipment */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1000&auto=format&fit=crop"
                alt="Construction Equipment"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Construction Equipment</h3>
              <p className="text-gray-600 mb-4">
                Professional training on excavators and other construction machinery. Get certified for heavy equipment operation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Safety Certification</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Site Operation Training</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Equipment Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            All our vehicles are regularly maintained and equipped with the latest safety features.
            Contact us to discuss specific vehicle requirements for your training needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fleet; 