import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

test('renders navbar', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/car photos/i);
    expect(linkElement).toBeInTheDocument();
});