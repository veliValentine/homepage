import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  test('renders title text', () => {
    render(<Header />);
    const title = screen.getByText('I am a header');
    expect(title).toBeInTheDocument();
  });
  
})
