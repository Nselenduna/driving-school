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

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: {
    bookingId: string;
  };
}

export const submitBookingForm = async (formData: FormData): Promise<ApiResponse> => {
  // Simulate API call with 1 second delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate successful response
  return {
    success: true,
    data: {
      bookingId: Math.random().toString(36).substring(7)
    }
  };
}; 