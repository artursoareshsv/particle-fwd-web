import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('renders image cards component', () => {
    render(<Home />);
    const linkElement = screen.getByText(/car photo/i);
    expect(linkElement).toBeInTheDocument();
});