import React from 'react';

const QRShare: React.FC = () => {
  const appUrl = "https://driving-school-jade.vercel.app";
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Scan to Visit Our Booking Portal</h2>
          <p className="text-gray-600">Safe & Secure Driving School Booking System</p>
          {window.location.hostname === 'localhost' && (
            <p className="text-sm text-yellow-600 mt-2">Note: Site is currently running locally. QR code will update automatically when deployed.</p>
          )}
        </div>
        
        <div className="flex justify-center mb-8">
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(appUrl)}`}
            alt="QR Code for Driving School Booking"
            className="w-48 h-48"
          />
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-2">Scan with your phone's camera</p>
          <p className="text-xs text-gray-400">or visit</p>
          <a 
            href={appUrl}
            className="text-red-600 hover:text-red-800 text-sm font-medium break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {appUrl}
          </a>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mx-auto">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">Secure Booking</h3>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mx-auto">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">Verified Platform</h3>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mx-auto">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">24/7 Access</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRShare; 