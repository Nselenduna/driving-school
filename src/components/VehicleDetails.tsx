import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles, Vehicle, VehicleFeature } from './Fleet';

const VehicleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find((v: Vehicle) => v.id === id);

  // Find the indices for navigation
  const currentIndex = vehicles.findIndex((v: Vehicle) => v.id === id);
  const nextVehicle = currentIndex < vehicles.length - 1 ? vehicles[currentIndex + 1] : null;
  const prevVehicle = currentIndex > 0 ? vehicles[currentIndex - 1] : null;

  if (!vehicle) {
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Vehicle Not Found</h2>
            <p className="mt-2 text-gray-600">The vehicle you're looking for doesn't exist.</p>
            <Link
              to="/fleet"
              className="mt-4 inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Back to Fleet
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Links */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/fleet"
            className="text-red-600 hover:text-red-700 flex items-center gap-2"
          >
            ← Back to Fleet
          </Link>
          <div className="flex gap-4">
            {prevVehicle && (
              <Link
                to={`/fleet/${prevVehicle.id}`}
                className="text-gray-600 hover:text-red-600"
              >
                ← {prevVehicle.name}
              </Link>
            )}
            {nextVehicle && (
              <Link
                to={`/fleet/${nextVehicle.id}`}
                className="text-gray-600 hover:text-red-600"
              >
                {nextVehicle.name} →
              </Link>
            )}
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-h-10">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{vehicle.name}</h1>
            <p className="mt-4 text-xl text-gray-600">{vehicle.description}</p>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicle.detailedFeatures.map((feature: VehicleFeature, index: number) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {vehicle.requirements.map((req: string, index: number) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Course Includes</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {vehicle.courseIncludes.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Pricing</h2>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Per Lesson</span>
                  <span className="text-2xl font-bold text-gray-900">R{vehicle.pricing.perLesson}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Full Package</span>
                  <span className="text-2xl font-bold text-gray-900">R{vehicle.pricing.package}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/booking"
                className="w-full inline-block text-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Book This Vehicle
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/fleet"
              className="text-red-600 hover:text-red-700 flex items-center gap-2"
            >
              ← Back to Fleet
            </Link>
            <div className="flex gap-4">
              {prevVehicle && (
                <Link
                  to={`/fleet/${prevVehicle.id}`}
                  className="text-gray-600 hover:text-red-600"
                >
                  ← {prevVehicle.name}
                </Link>
              )}
              {nextVehicle && (
                <Link
                  to={`/fleet/${nextVehicle.id}`}
                  className="text-gray-600 hover:text-red-600"
                >
                  {nextVehicle.name} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails; 