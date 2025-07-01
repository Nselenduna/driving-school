import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-0 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white w-full sm:rounded-lg sm:max-w-2xl max-h-screen overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-4 py-3 sm:px-6 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 pr-8">{title}</h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-4 py-4 sm:px-6 sm:py-6" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 