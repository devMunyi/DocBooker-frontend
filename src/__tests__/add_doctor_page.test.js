import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AddDoctor from '../pages/AddDoctor';

describe('AddDoctor', () => {
  test('renders NavBar and AddDoctorForm', () => {
    render(
      <Router>
        <AddDoctor />
      </Router>,
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
