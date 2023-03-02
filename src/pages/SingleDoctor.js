import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import DoctorDetails from '../components/DoctorDetails';

function SingleDoctor() {
  const { selectedDoctor } = useSelector((state) => state.selectedDoctor);

  if (selectedDoctor === null) {
    window.location.href = '/';
  }

  return (
    <div className="page">
      <NavBar />
      <main className="content">
        <DoctorDetails doctor={selectedDoctor} />
      </main>
    </div>
  );
}

export default SingleDoctor;
