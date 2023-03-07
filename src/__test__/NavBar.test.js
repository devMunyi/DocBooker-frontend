import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import NavBar from '../components/NavBar';

it('NavBar component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
