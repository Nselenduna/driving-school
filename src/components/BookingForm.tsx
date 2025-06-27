import React, { useState } from 'react';
import { submitBookingForm } from '../services/api';
import Modal from './Modal';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courseType: string;
  preferredInstructor: string;
  preferredDate: string;
  message: string;
  acceptedTerms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  courseType: '',
  preferredInstructor: '',
  preferredDate: '',
  message: '',
  acceptedTerms: false
};

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.courseType) newErrors.courseType = 'Please select a course type';
    if (!formData.acceptedTerms) newErrors.terms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await submitBookingForm(formData);
      
      if (response.success) {
        setSuccess(true);
        setFormData(initialFormData);
        // Reset form after 3 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit booking request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Personal Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-base font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3 ${
                  errors.firstName ? 'border-red-500' : ''
                }`}
              />
              {errors.firstName && (
                <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-base font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3 ${
                  errors.lastName ? 'border-red-500' : ''
                }`}
              />
              {errors.lastName && (
                <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-base font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3 ${
                  errors.phone ? 'border-red-500' : ''
                }`}
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Course Details</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="courseType" className="block text-base font-medium text-gray-700">
                Course Type
              </label>
              <select
                id="courseType"
                name="courseType"
                value={formData.courseType}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3 ${
                  errors.courseType ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select a course</option>
                <option value="standard">Standard Course (20-30 Hours)</option>
                <option value="intensive">Intensive Course (2-3 Weeks)</option>
                <option value="refresher">Refresher Course</option>
              </select>
              {errors.courseType && (
                <p className="mt-2 text-sm text-red-600">{errors.courseType}</p>
              )}
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-base font-medium text-gray-700">
                Preferred Start Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3"
            placeholder="Any specific requirements or questions?"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleInputChange}
            className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{' '}
            <button
              type="button"
              onClick={() => setShowTerms(true)}
              className="font-medium text-red-600 hover:text-red-500"
            >
              Terms of Service
            </button>{' '}
            and{' '}
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="font-medium text-red-600 hover:text-red-500"
            >
              Privacy Policy
            </button>
          </label>
        </div>

        {errors.terms && (
          <p className="mt-2 text-sm text-red-600">{errors.terms}</p>
        )}

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-base text-red-600">{error}</p>
          </div>
        )}

        {success && (
          <div className="rounded-md bg-green-50 p-4">
            <p className="text-base text-green-600">Booking submitted successfully!</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
            loading ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Submitting...' : 'Submit Booking'}
        </button>
      </form>

      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
      >
        <div className="prose">
          <h3>1. Booking and Cancellation</h3>
          <p>Please provide at least 24 hours notice for cancellations. Late cancellations may be subject to fees.</p>
          
          <h3>2. Payment</h3>
          <p>Payment is required at the time of booking. We accept various payment methods including credit cards and cash.</p>
          
          <h3>3. Student Responsibilities</h3>
          <p>Students must have a valid learner's permit and bring it to all lessons. Proper attire is required for all lessons.</p>
        </div>
      </Modal>

      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <div className="prose">
          <h3>Information Collection</h3>
          <p>We collect only necessary information required for booking and communication purposes.</p>
          
          <h3>Data Usage</h3>
          <p>Your information is used solely for providing driving instruction services and will not be shared with third parties.</p>
          
          <h3>Contact</h3>
          <p>For privacy concerns, please contact our privacy officer.</p>
        </div>
      </Modal>
    </>
  );
};

export default BookingForm; 