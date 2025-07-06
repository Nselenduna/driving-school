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
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop',
    description: 'Perfect for beginners. Our compact sedans are easy to maneuver and ideal for learning the basics of driving.',
    features: ['Power Steering', 'Dual Controls', 'Automatic & Manual Options'],
    detailedFeatures: [
      {
        icon: '🎮',
        title: 'Dual Control System',
        description: 'Instructor-controlled brake and clutch for enhanced safety during training.'
      },
      {
        icon: '🔄',
        title: 'Transmission Options',
        description: 'Choose between automatic and manual transmission based on your learning preference.'
      },
      {
        icon: '📱',
        title: 'Modern Dashboard',
        description: 'Digital display and modern controls to help you learn contemporary vehicle features.'
      }
    ],
    requirements: [
      'Valid provisional license',
      'Must be at least 17 years old',
      'Basic understanding of road signs (we can help with this)'
    ],
    courseIncludes: [
      'Theory preparation',
      'Hazard perception training',
      'Parking maneuvers',
      'Mock test preparation'
    ],
    pricing: {
      perLesson: 35,
      package: 299
    }
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop',
    description: 'Learn to ride safely on our training motorcycles. Perfect for A1 and A2 license preparation.',
    features: ['Various Engine Sizes', 'Safety Equipment Provided', 'Beginner Friendly'],
    detailedFeatures: [
      {
        icon: '🏍️',
        title: 'Multiple Bike Options',
        description: 'Training bikes ranging from 125cc to 600cc for different license categories.'
      },
      {
        icon: '🛡️',
        title: 'Safety Gear Included',
        description: 'Full set of protective gear provided: helmet, jacket, gloves, and boots.'
      },
      {
        icon: '📊',
        title: 'Progressive Learning',
        description: 'Structured curriculum from basic handling to advanced riding techniques.'
      }
    ],
    requirements: [
      'CBT completion required',
      'Age requirements vary by license type',
      'Basic balance and coordination'
    ],
    courseIncludes: [
      'CBT certification',
      'Road safety training',
      'Advanced handling techniques',
      'License preparation'
    ],
    pricing: {
      perLesson: 45,
      package: 399
    }
  },
  {
    id: 'commercial-truck',
    name: 'Commercial Truck',
    image: '/commercial truck.jpeg?v=1',
    description: 'For commercial license aspirants. Train on modern trucks equipped with the latest safety features.',
    features: ['Air Brakes', 'Professional Grade', 'Load Training'],
    detailedFeatures: [
      {
        icon: '🚛',
        title: 'Professional Vehicle',
        description: 'Industry-standard commercial vehicles used by major transport companies.'
      },
      {
        icon: '🎯',
        title: 'Load Management',
        description: 'Learn proper loading, securing, and weight distribution techniques.'
      },
      {
        icon: '📋',
        title: 'Documentation Training',
        description: 'Comprehensive training on logbooks and transport documentation.'
      }
    ],
    requirements: [
      'Valid Category B license',
      'Medical examination certificate',
      'Age 21 or above'
    ],
    courseIncludes: [
      'CPC training modules',
      'Load securing techniques',
      'Eco-driving principles',
      'Safety regulations'
    ],
    pricing: {
      perLesson: 85,
      package: 799
    }
  },
  {
    id: 'passenger-bus',
    name: 'Passenger Bus',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    description: 'Specialized training for bus driver certification. Learn to safely transport passengers in our modern buses.',
    features: ['Passenger Safety Training', 'Route Planning', 'Public Transport Regulations'],
    detailedFeatures: [
      {
        icon: '🚌',
        title: 'Modern Bus Fleet',
        description: 'Train on contemporary buses used in public transport.'
      },
      {
        icon: '🗺️',
        title: 'Route Management',
        description: 'Learn efficient route planning and schedule adherence.'
      },
      {
        icon: '👥',
        title: 'Passenger Interaction',
        description: 'Customer service training for passenger transport.'
      }
    ],
    requirements: [
      'Valid Category B license',
      'Clean driving record',
      'Public service vehicle license'
    ],
    courseIncludes: [
      'Passenger safety protocols',
      'Route optimization',
      'Emergency procedures',
      'Customer service training'
    ],
    pricing: {
      perLesson: 75,
      package: 699
    }
  },
  {
    id: 'construction-equipment',
    name: 'Construction Equipment',
    image: '/construction equipment.jpeg?v=2',
    description: 'Professional training on excavators and other construction machinery. Get certified for heavy equipment operation.',
    features: ['Safety Certification', 'Site Operation Training', 'Equipment Maintenance'],
    detailedFeatures: [
      {
        icon: '🚜',
        title: 'Multiple Equipment Types',
        description: 'Training on excavators, bulldozers, and other construction machinery.'
      },
      {
        icon: '⚠️',
        title: 'Site Safety',
        description: 'Comprehensive site safety and risk assessment training.'
      },
      {
        icon: '🔧',
        title: 'Maintenance Knowledge',
        description: 'Basic maintenance and equipment care procedures.'
      }
    ],
    requirements: [
      'Construction site safety card',
      'Basic mechanical knowledge',
      'Physical fitness certificate'
    ],
    courseIncludes: [
      'Equipment operation techniques',
      'Safety protocols',
      'Maintenance procedures',
      'Site management basics'
    ],
    pricing: {
      perLesson: 95,
      package: 899
    }
  }
];

const Fleet: React.FC = () => {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">OUR FLEET</h2>
          <p className="mt-2 text-2xl font-bold text-gray-900">Training Vehicles for Every License Class</p>
          <p className="mt-4 text-base text-gray-600">
            From learner vehicles to specialized commercial equipment, we have the right vehicle for your training needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              to={`/fleet/${vehicle.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{vehicle.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{vehicle.description}</p>
                <div className="space-y-2">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            All our vehicles are regularly maintained and equipped with the latest safety features.
            Contact us to discuss specific vehicle requirements for your training needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fleet; 