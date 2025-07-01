import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../BookingForm';
import * as api from '../../services/api';

// Mock the API service
jest.mock('../../services/api');
const mockedApi = api as jest.Mocked<typeof api>;

describe('BookingForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields', () => {
    render(<BookingForm />);
    
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/course type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred instructor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred start date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit booking request/i })).toBeInTheDocument();
  });

  test('shows validation errors for empty required fields', async () => {
    render(<BookingForm />);
    
    const submitButton = screen.getByRole('button', { name: /submit booking request/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
    });
  });

  test('validates email format', async () => {
    render(<BookingForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByRole('button', { name: /submit booking request/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  test('validates phone number format', async () => {
    render(<BookingForm />);
    
    const phoneInput = screen.getByLabelText(/phone number/i);
    fireEvent.change(phoneInput, { target: { value: 'invalid-phone' } });
    
    const submitButton = screen.getByRole('button', { name: /submit booking request/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument();
    });
  });

  test('submits form successfully with valid data', async () => {
    mockedApi.submitBookingForm.mockResolvedValue({
      success: true,
      data: { bookingId: 'test123' }
    });

    // Mock window.alert
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<BookingForm />);
    
    // Fill in valid form data
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '07123456789' } });
    fireEvent.change(screen.getByLabelText(/course type/i), { target: { value: 'standard' } });
    fireEvent.change(screen.getByLabelText(/preferred start date/i), { target: { value: '2024-04-01' } });
    fireEvent.click(screen.getByLabelText(/I accept the terms and conditions/i));
    
    const submitButton = screen.getByRole('button', { name: /submit booking request/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockedApi.submitBookingForm).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '07123456789',
        courseType: 'standard',
        preferredInstructor: '',
        preferredDate: '2024-04-01',
        message: '',
        acceptedTerms: true
      });
    });

    expect(alertSpy).toHaveBeenCalledWith(
      expect.stringContaining('Booking request submitted successfully')
    );

    alertSpy.mockRestore();
  });

  test('handles form submission errors', async () => {
    mockedApi.submitBookingForm.mockRejectedValue(new Error('API Error'));
    
    render(<BookingForm />);
    
    // Fill in minimal valid data
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '07123456789' } });
    fireEvent.change(screen.getByLabelText(/course type/i), { target: { value: 'standard' } });
    fireEvent.change(screen.getByLabelText(/preferred start date/i), { target: { value: '2024-04-01' } });
    fireEvent.click(screen.getByLabelText(/I accept the terms and conditions/i));
    
    const submitButton = screen.getByRole('button', { name: /submit booking request/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/API Error/i)).toBeInTheDocument();
    });
  });

  test('clears field errors when user starts typing', async () => {
    render(<BookingForm />);
    
    // Trigger validation error
    const submitButton = screen.getByRole('button', { name: /submit booking request/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
    });
    
    // Start typing in first name field
    const firstNameInput = screen.getByLabelText(/first name/i);
    fireEvent.change(firstNameInput, { target: { value: 'J' } });
    
    // Error should be cleared
    expect(screen.queryByText(/first name is required/i)).not.toBeInTheDocument();
  });
}); 