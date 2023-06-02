import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Coin from '../components/Coin';

class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

const mockStore = configureStore([thunk]);

describe('Coin.js', () => {
  it('should render the Coin component', () => {
    const initialState = {
      coins: {
        coins: [
          {
            id: 'bitcoin',
            rank: '1',
            symbol: 'BTC',
            name: 'Bitcoin',
            supply: '19390006.0000000000000000',
            maxSupply: '21000000.0000000000000000',
            marketCapUsd: '523461027259.6814922831300980',
            volumeUsd24Hr: '3833686494.4517955591897860',
            priceUsd: '26996.4345168166266830',
            changePercent24Hr: '-0.3439222636312085',
            vwap24Hr: '26909.0357708240879410',
            explorer: 'https://blockchain.info/',
          },
        ],
      },
    };
    const store = mockStore(initialState);

    const tree = render(
      <Provider store={store}>
        <Router>
          <Coin />
        </Router>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
