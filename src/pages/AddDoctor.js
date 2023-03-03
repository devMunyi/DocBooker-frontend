import React from 'react';
import NavBar from '../components/NavBar';
import AddDoctorForm from '../components/DoctorForm';

function AddDoctor() {
  return (
    <div className="page">
      <NavBar />
      <main className="content single-doctor-page">
        <AddDoctorForm />
      </main>
    </div>
  );
}

export default AddDoctor;
