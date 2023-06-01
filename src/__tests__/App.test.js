import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

describe('App.js', () => {
    it('should render correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})