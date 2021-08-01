import React from 'react';
import { render, screen } from '@testing-library/react';
import Viewer from './Viewer';

test('renders viewer component', () => {
    render(<Viewer />);
    const linkElement = screen.getByRole('img');
    expect(linkElement).toBeInTheDocument();
});