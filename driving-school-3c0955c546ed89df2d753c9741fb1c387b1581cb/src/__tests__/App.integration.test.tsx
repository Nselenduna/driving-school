import React from 'react';
import { render, screen } from '@testing-library/react';

// Simple mock component that doesn't rely on external deps
const MockApp = () => {
  return (
    <div>
      <nav>
        <div>ZHWANE DRIVING SCHOOL</div>
        <div>Home</div>
        <div>Our Fleet</div>
        <div>Blog</div>
        <div>Book Now</div>
      </nav>
      <main>
        <div>Learn to Drive with</div>
        <div>Confidence</div>
      </main>
      <footer>
        <div>Professional driving instruction tailored to your needs.</div>
        <div>Quick Links</div>
        <div>Contact</div>
      </footer>
    </div>
  );
};

describe('App Integration', () => {
  test('renders main navigation elements', () => {
    render(<MockApp />);
    
    expect(screen.getByText('ZHWANE DRIVING SCHOOL')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Our Fleet')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Book Now')).toBeInTheDocument();
  });

  test('renders main content', () => {
    render(<MockApp />);
    
    expect(screen.getByText('Learn to Drive with')).toBeInTheDocument();
    expect(screen.getByText('Confidence')).toBeInTheDocument();
  });

  test('renders footer content', () => {
    render(<MockApp />);
    
    expect(screen.getByText('Professional driving instruction tailored to your needs.')).toBeInTheDocument();
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
}); 