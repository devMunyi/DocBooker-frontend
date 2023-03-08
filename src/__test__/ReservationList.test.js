import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../Redux/store';
import ReservationList from '../pages/ReservationList';

describe('ReservationList component', () => {
  it('renders without crashing', () => {
    localStorage.setItem('user', JSON.stringify({ id: 123 }));
    const { getAllByText } = render(
      <Provider store={store}>
        <Router>
          <ReservationList />
        </Router>
      </Provider>,
    );
    const headers = getAllByText('My Reservations');
    expect(headers[0]).toBeInTheDocument();
  });
});
