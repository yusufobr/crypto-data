import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Coins from '../components/Coins';
import store from '../redux/store';

describe('Coins component', () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Coins />
          </MemoryRouter>
        </Provider>
      );
    });
  
    it('renders the search input correctly', () => {
      const searchInput = screen.getByPlaceholderText('Search currency...');
      expect(searchInput).toBeInTheDocument();
    });
});