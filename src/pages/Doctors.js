import React from 'react';
import NavBar from '../components/NavBar';
import DoctorsIndex from '../components/DoctorsIndex';

function Doctors() {
  return (
    <div className="page">
      <NavBar />
      <main className="content">
        <DoctorsIndex />
      </main>
    </div>
  );
}

export default Doctors;
