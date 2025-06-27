interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courseType: string;
  preferredInstructor: string;
  preferredTimes: string;
  message: string;
  termsAccepted: boolean;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const submitBookingForm = async (formData: BookingFormData): Promise<ApiResponse> => {
  try {
    // TODO: Replace with actual API endpoint
    // This is a mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate email sending
    console.log('Sending confirmation email to:', formData.email);

    // For now, always return success
    return {
      success: true,
      message: 'Booking request submitted successfully',
      data: {
        bookingId: Math.random().toString(36).substring(7),
        submissionTime: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error('Error submitting booking form:', error);
    return {
      success: false,
      message: 'Failed to submit booking request. Please try again later.'
    };
  }
}; 