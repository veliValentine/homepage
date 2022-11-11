import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '.';


describe('NavBar', () => {
  describe('renders once', () => {
    test.each([
      {
        name: 'text',
        inputValue: 'hello'
      }
    ])('$name', ({
      inputValue
    }) => {
      render(<NavBar items={[inputValue]} />);
      const response = screen.getByText(inputValue);
      expect(response).toBeInTheDocument();
    });
  });
});
