import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddDoctorForm from '../components/DoctorForm';

describe('AddDoctorForm', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({ id: 1 }));
  });

  afterEach(() => {
    localStorage.removeItem('user');
  });

  it('should render the form correctly', () => {
    render(<AddDoctorForm />);
    const nameInput = screen.getByTestId('input-name');
    const emailInput = screen.getByTestId('input-email');
    const specializationInput = screen.getByTestId('input-specialization');
    const pictureInput = screen.getByTestId('input-picture');
    const addButton = screen.getByRole('button', { name: 'Add Doctor' });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(specializationInput).toBeInTheDocument();
    expect(pictureInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it('should show error messages if any required field is empty', () => {
    render(<AddDoctorForm />);
    const addButton = screen.getByRole('button', { name: 'Add Doctor' });
    fireEvent.click(addButton);

    const nameErrorMessage = screen.getByText('Name is required');
    const emailErrorMessage = screen.getByText('Email is required');
    const specializationErrorMessage = screen.getByText('Specialization is required');
    const pictureUrlErrorMessage = screen.getByText('Picture URL is required');

    expect(nameErrorMessage).toBeInTheDocument();
    expect(emailErrorMessage).toBeInTheDocument();
    expect(specializationErrorMessage).toBeInTheDocument();
    expect(pictureUrlErrorMessage).toBeInTheDocument();
  });

  it('should submit the form when all required fields are filled', async () => {
    const mockDoctor = {
      name: 'Test Doctor',
      email: 'test@example.com',
      specialization: 'Test Specialization',
      picture: 'http://example.com/test.jpg',
    };

    // Mock the fetch request and response
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }));

    render(<AddDoctorForm />);
    const nameInput = screen.getByTestId('input-name');
    const emailInput = screen.getByTestId('input-email');
    const specializationInput = screen.getByTestId('input-specialization');
    const pictureInput = screen.getByTestId('input-picture');
    const addButton = screen.getByRole('button', { name: 'Add Doctor' });

    fireEvent.change(nameInput, { target: { value: mockDoctor.name } });
    fireEvent.change(emailInput, { target: { value: mockDoctor.email } });
    fireEvent.change(specializationInput, { target: { value: mockDoctor.specialization } });
    fireEvent.change(pictureInput, { target: { value: mockDoctor.picture } });
    fireEvent.click(addButton);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/users/1/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockDoctor),
    });
  });
});
