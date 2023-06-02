import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Chart from '../components/Chart';

class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

describe('Chart.js', () => {
  it('should render correctly', () => {
    const data = [
      { USD: 10, Date: '2023-03-13' },
      { USD: 12, Date: '2023-03-14' },
      { USD: 18, Date: '2023-03-15' },
    ];
    const tree = renderer
      .create(
        <Provider store={store}>
          <Chart history={data} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
