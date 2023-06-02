import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  it('renders the logo image', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });
});
