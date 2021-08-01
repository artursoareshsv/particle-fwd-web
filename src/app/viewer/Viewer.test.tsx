import React from 'react';
import { render, screen } from '@testing-library/react';
import { Viewer } from './Viewer';

test('renders viewer component', () => {
    render(<Viewer />);
    const linkElement = screen.getByText(/viewer/i);
    expect(linkElement).toBeInTheDocument();
});