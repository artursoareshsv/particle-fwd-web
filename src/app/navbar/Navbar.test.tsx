import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

test('renders navbar', () => {
    render(<Navbar title="test" color="test" />);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
});