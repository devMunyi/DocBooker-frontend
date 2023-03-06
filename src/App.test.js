import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/Login or Signup/i)).toBeInTheDocument();
});
