import React, { useState } from 'react';
import { toast } from 'react-toastify';

import './css/doctor_form.css';

function AddDoctorForm() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [picture, setPicture] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [specializationError, setSpecializationError] = useState(false);
  const [pictureUrlError, setPictureUrlError] = useState(false);

  const resetValues = () => {
    setEmail('');
    setName('');
    setSpecialization('');
    setPicture('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = false;

    // Check for empty fields
    if (name === '') {
      setNameError(true);
      errors = true;
    } else {
      setNameError(false);
    }

    if (email === '') {
      setEmailError(true);
      errors = true;
    } else {
      setEmailError(false);
    }

    if (specialization === '') {
      setSpecializationError(true);
      errors = true;
    } else {
      setSpecializationError(false);
    }

    if (picture === '') {
      setPictureUrlError(true);
      errors = true;
    } else {
      setPictureUrlError(false);
    }

    // Submit data if there are no errors
    if (!errors) {
      try {
        const response = await fetch(`http://localhost:3000/api/users/${user.id}/doctors`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            specialization,
            picture,
          }),
        });
        if (response.ok) {
          // New user created, redirect to landing page
          toast.success('Doctor created successfully!');
          resetValues();
        } else {
          throw new Error('Failed to create doctor');
        }
      } catch (error) {
        toast.error(error.message || 'Failed to create doctor');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-doctor-form">
      <h2>Add Doctor</h2>
      <div className="form-group">
        <span>Name:</span>
        <input
          type="text"
          id="name-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          data-testid="input-name"
        />
        {nameError && <span className="error-message">Name is required</span>}
      </div>
      <div className="form-group">
        <span>Email:</span>
        <input
          type="email"
          id="email-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          data-testid="input-email"
        />
        {emailError && <span className="error-message">Email is required</span>}
      </div>
      <div className="form-group">
        <span>Specialization:</span>
        <input
          type="text"
          id="specialization-input"
          value={specialization}
          onChange={(event) => setSpecialization(event.target.value)}
          data-testid="input-specialization"
        />
        {specializationError && <span className="error-message">Specialization is required</span>}
      </div>
      <div className="form-group">
        <span>Picture URL:</span>
        <input
          type="url"
          id="picture-url-input"
          value={picture}
          onChange={(event) => setPicture(event.target.value)}
          data-testid="input-picture"
        />
        {pictureUrlError && <span className="error-message">Picture URL is required</span>}
      </div>
      <button type="submit">Add Doctor</button>
    </form>
  );
}

export default AddDoctorForm;
