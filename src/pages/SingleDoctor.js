import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import DoctorDetails from '../components/DoctorDetails';
import './css/single_doctor_page.css';

function SingleDoctor() {
  const { selectedDoctor } = useSelector((state) => state.selectedDoctor);

  if (selectedDoctor === null) {
    window.location.href = '/';
  }

  return (
    <div className="page">
      <NavBar />
      <main className="content single-doctor-page">
        <DoctorDetails doctor={selectedDoctor} />
      </main>
    </div>
  );
}

export default SingleDoctor;
