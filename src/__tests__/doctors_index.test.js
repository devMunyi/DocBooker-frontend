import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DoctorsIndex from '../components/DoctorsIndex';

const mockStore = configureStore([]);

// These tests are under the assumption that the pagnition is set to display 3 at a time

describe('DoctorsIndex', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      doctors: {
        doctors: [
          {
            name: 'John Doe',
            email: 'johndoe@example.com',
            specialization: 'Cardiologist',
            picture: 'https://example.com/johndoe.jpg',
          },
          {
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            specialization: 'Dermatologist',
            picture: 'https://example.com/janesmith.jpg',
          },
          {
            name: 'Jenny Smith',
            email: 'jennysmith@example.com',
            specialization: 'Dermatologist',
            picture: 'https://example.com/janesmith.jpg',
          },
          {
            name: 'Mark Smith',
            email: 'marksmith@example.com',
            specialization: 'Dermatologist',
            picture: 'https://example.com/janesmith.jpg',
          },
          {
            name: 'Eric Smith',
            email: 'ericsmith@example.com',
            specialization: 'Dermatologist',
            picture: 'https://example.com/janesmith.jpg',
          },
        ],
      },
    });
  });

  describe('renders DoctorCards and pagination buttons', () => {
    it('displays doctors names', () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <DoctorsIndex />
          </MemoryRouter>
        </Provider>,
      );

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.getByText('Jenny Smith')).toBeInTheDocument();
      expect(screen.queryByText('Mark Smith')).not.toBeInTheDocument();
    });

    it('check that prev button is deactivated when at the top of the list', () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <DoctorsIndex />
          </MemoryRouter>
        </Provider>,
      );

      fireEvent.click(screen.getByTestId('prev-button'));
      expect(screen.queryByText('Mark Smith')).not.toBeInTheDocument();
    });

    it('check that next button works and lists next pagnition', () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <DoctorsIndex />
          </MemoryRouter>
        </Provider>,
      );

      fireEvent.click(screen.getByTestId('next-button'));
      expect(screen.queryByText('Eric Smith')).toBeInTheDocument();
      expect(screen.queryByText('Mark Smith')).toBeInTheDocument();
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
      expect(screen.queryByText('Jenny Smith')).not.toBeInTheDocument();
    });

    it('check that next button deactivates at buttom of list', () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <DoctorsIndex />
          </MemoryRouter>
        </Provider>,
      );

      fireEvent.click(screen.getByTestId('next-button'));
      fireEvent.click(screen.getByTestId('next-button'));
      expect(screen.queryByText('Eric Smith')).toBeInTheDocument();
      expect(screen.queryByText('Mark Smith')).toBeInTheDocument();
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
      expect(screen.queryByText('Jenny Smith')).not.toBeInTheDocument();
    });
  });
});
