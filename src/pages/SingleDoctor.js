import React from 'react';
import { Link } from 'react-router-dom';
import DoctorDetails from '../components/DoctorDetails';
import dummyData from '../components/dummyData';

function SingleDoctor() {
  const doctor = dummyData[0];
  return (
    <div className="container d-flex justify-content-center" style={{ width: '100vh' }}>
      <DoctorDetails doctor={doctor} />
      <Link to="/reserve/1" className="btn btn-success btn-sm">Reserve</Link>
    </div>
  );
}

export default SingleDoctor;
