import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import Reserve from '../pages/Reserve';

it('Reserve component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Reserve />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
