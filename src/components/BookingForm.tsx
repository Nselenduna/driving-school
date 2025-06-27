import React, { useState } from 'react';
import { submitBookingForm } from '../services/api';

interface BookingFormData {
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

const initialFormData: BookingFormData = {
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

interface FormErrors {
  [key: string]: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9\s\-()+]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.courseType) {
      newErrors.courseType = 'Please select a course type';
    }
    
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select preferred date';
    }

    if (!formData.acceptedTerms) {
      newErrors.terms = 'You must accept the terms and conditions to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await submitBookingForm(formData);
      
      if (response.success && response.data) {
        setSubmitStatus('success');
        setFormData(initialFormData);
        
        // Show success message
        alert(`Booking request submitted successfully! We will contact you shortly.\nBooking ID: ${response.data.bookingId}`);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors(prev => ({
        ...prev,
        submit: error instanceof Error ? error.message : 'Failed to submit booking request. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-sm">
      {/* Personal Information */}
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

      {/* Course Details */}
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
              <option value="starter">Starter Package (£299)</option>
              <option value="standard">Standard Package (£549)</option>
              <option value="premium">Premium Package (£799)</option>
            </select>
            {errors.courseType && (
              <p className="mt-2 text-sm text-red-600">{errors.courseType}</p>
            )}
          </div>

          <div>
            <label htmlFor="preferredInstructor" className="block text-base font-medium text-gray-700">
              Preferred Instructor
            </label>
            <select
              id="preferredInstructor"
              name="preferredInstructor"
              value={formData.preferredInstructor}
              onChange={handleInputChange}
              className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3 ${
                errors.preferredInstructor ? 'border-red-500' : ''
              }`}
            >
              <option value="">No preference</option>
              <option value="Mthokozisi Dube">Mthokozisi Dube - Senior Instructor</option>
              <option value="Bhekisipho Ndlovu">Bhekisipho Ndlovu - Theory Specialist</option>
                                <option value="Melisizwe Sithole">Melisizwe Sithole - Advanced Instructor</option>
            </select>
            {errors.preferredInstructor && (
              <p className="mt-2 text-sm text-red-600">{errors.preferredInstructor}</p>
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
              className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3 ${
                errors.preferredDate ? 'border-red-500' : ''
              }`}
            />
            {errors.preferredDate && (
              <p className="mt-2 text-sm text-red-600">{errors.preferredDate}</p>
            )}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-6">Additional Information</h3>
        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray-700">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-base px-4 py-3"
            placeholder="Any additional information or special requirements..."
          />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="acceptedTerms"
            name="acceptedTerms"
            type="checkbox"
            checked={formData.acceptedTerms}
            onChange={handleInputChange}
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3">
          <label htmlFor="acceptedTerms" className="text-base text-gray-700">
            I accept the terms and conditions
          </label>
          {errors.terms && (
            <p className="mt-2 text-sm text-red-600">{errors.terms}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
        </button>
        {submitStatus === 'error' && errors.submit && (
          <p className="mt-2 text-sm text-red-600">{errors.submit}</p>
        )}
      </div>
    </form>
  );
};

export default BookingForm; 