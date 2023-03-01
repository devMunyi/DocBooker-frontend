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
    <div className="container d-flex justify-content-center" style={{ width: '100vh' }}>
      <DoctorDetails doctor={selectedDoctor} />
      <Link to="/reserve/1" className="btn btn-success btn-sm">Reserve</Link>
    </div>
  );
}

export default SingleDoctor;
