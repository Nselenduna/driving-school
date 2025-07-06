import React from 'react';
import { Link } from 'react-router-dom';

export interface VehicleFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Vehicle {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  detailedFeatures: VehicleFeature[];
  requirements: string[];
  courseIncludes: string[];
  pricing: {
    perLesson: number;
    package: number;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: 'small-sedan',
    name: 'Small Sedan',
    image: '/small-sedan.jpeg?v=1',
    description: 'Perfect for beginners learning to drive. Easy to maneuver and control.',
    features: ['Automatic Transmission', 'Power Steering', 'ABS Brakes', 'Dual Controls'],
    detailedFeatures: [
      {
        icon: '🚗',
        title: 'Easy Control',
        description: 'Perfect for beginners with responsive handling'
      },
      {
        icon: '🔄',
        title: 'Automatic',
        description: 'Smooth automatic transmission'
      },
      {
        icon: '🛡️',
        title: 'Safety',
        description: 'Modern safety features including ABS'
      },
      {
        icon: '👨‍🏫',
        title: 'Dual Controls',
        description: 'Instructor has backup controls for safety'
      }
    ],
    requirements: [
      'Valid Learner\'s License',
      'Minimum age 17',
      'ID Document',
      'Comfortable with basic car controls'
    ],
    courseIncludes: [
      '10 practical driving lessons',
      'Theory test preparation',
      'Final assessment',
      'Booking assistance for driver\'s test'
    ],
    pricing: {
      perLesson: 350,
      package: 3000
    }
  },
  {
    id: 'commercial-truck',
    name: 'Commercial Truck',
    image: '/commercial truck.jpeg?v=1',
    description: 'Professional training for commercial driver\'s license. Heavy vehicle expertise.',
    features: ['Manual Transmission', 'Air Brakes', 'Load Capacity Training', 'Professional Grade'],
    detailedFeatures: [
      {
        icon: '🚛',
        title: 'Professional',
        description: 'Industry-standard commercial vehicle'
      },
      {
        icon: '⚙️',
        title: 'Manual',
        description: 'Full manual transmission control'
      },
      {
        icon: '🅿️',
        title: 'Parking',
        description: 'Advanced parking techniques'
      },
      {
        icon: '📦',
        title: 'Loading',
        description: 'Load management training'
      }
    ],
    requirements: [
      'Valid Code 10 License',
      'Medical certificate',
      'Age 21 or older',
      'Clean driving record'
    ],
    courseIncludes: [
      '20 practical driving hours',
      'Load securing training',
      'Route planning lessons',
      'Professional driver certification'
    ],
    pricing: {
      perLesson: 800,
      package: 12000
    }
  },
  {
    id: 'construction',
    name: 'Construction Equipment',
    image: '/construction equipment.jpeg?v=2',
    description: 'Specialized training for construction and earth-moving equipment.',
    features: ['Heavy Machinery', 'Safety Protocols', 'Site Operations', 'Certification'],
    detailedFeatures: [
      {
        icon: '🚜',
        title: 'Equipment',
        description: 'Various construction machinery'
      },
      {
        icon: '⚠️',
        title: 'Safety',
        description: 'Comprehensive safety training'
      },
      {
        icon: '🏗️',
        title: 'Operations',
        description: 'Real site operation practice'
      },
      {
        icon: '📜',
        title: 'Certified',
        description: 'Industry-recognized certification'
      }
    ],
    requirements: [
      'Basic driving experience',
      'Safety course completion',
      'Physical fitness certificate',
      'Age 18 or older'
    ],
    courseIncludes: [
      '40 hours practical training',
      'Safety protocol training',
      'Site management basics',
      'Certification exam'
    ],
    pricing: {
      perLesson: 1200,
      package: 15000
    }
  }
];

const Fleet: React.FC = () => {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">OUR FLEET</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">Choose Your Training Vehicle</p>
          <p className="mt-4 text-xl text-gray-500">We offer a diverse range of vehicles to suit your learning needs</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Link key={vehicle.id} to={`/fleet/${vehicle.id}`} className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="mt-2 text-gray-500">{vehicle.description}</p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-gray-900">
                      <span className="text-sm">From</span>
                      <p className="text-lg font-semibold">R{vehicle.pricing.perLesson}/lesson</p>
                    </div>
                    <span className="text-red-600 group-hover:translate-x-1 transition-transform duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleet; 