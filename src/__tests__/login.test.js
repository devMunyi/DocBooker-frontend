import React from 'react';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // import MemoryRouter
import LoginSignUp from '../pages/LoginSignUp';

// Mock the toast function to avoid errors
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('LoginSignUp component', () => {
  // Test the initial rendering of the component
  it('renders the component', () => {
    render(
      <MemoryRouter>
        <LoginSignUp />
      </MemoryRouter>,
    );
    expect(screen.getByText('Login or Signup')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login/Signup' })).toBeInTheDocument();
  });

  // Test the behavior of the login button with an existing user
  it('handles login with an existing user', async () => {
    const user = { username: 'johndoe' };
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(user),
    }));
    render(
      <MemoryRouter>
        <LoginSignUp />
      </MemoryRouter>,
    );
    const input = screen.getByPlaceholderText('username');
    fireEvent.change(input, { target: { value: user.username } });
    const button = screen.getByRole('button', { name: 'Login/Signup' });
    fireEvent.click(button);
    await waitFor(() => {
      expect(window.location.href).toBe('http://localhost/');
      expect(screen.queryByText('The user "johndoe" was not found. Do you want to create a new user?')).not.toBeInTheDocument();
    });
    global.fetch.mockRestore();
  });

  // Test the behavior of the login button with a non-existing user
  it('handles login with a non-existing user', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      status: 404,
    }));
    render(
      <MemoryRouter>
        <LoginSignUp />
      </MemoryRouter>,
    );
    const input = screen.getByPlaceholderText('username');
    fireEvent.change(input, { target: { value: 'newuser' } });
    const button = screen.getByRole('button', { name: 'Login/Signup' });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText('The user "newuser" was not found. Do you want to create a new user?')).toBeInTheDocument();
    });
    global.fetch.mockRestore();
  });
});
