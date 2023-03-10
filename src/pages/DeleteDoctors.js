import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDoctors } from '../Redux/reducers/allDoctors';

import NavBar from '../components/NavBar';
import DoctorsIndex from '../components/DoctorsIndex';
import './css/doctor_page.css';

function DeleteDoctors() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(fetchDoctors(user.username));
  }, [dispatch, user.username]);

  return (
    <div className="page">
      <NavBar />
      <main className="content">
        <div className="doctor-page-heading">
          <h1>Available Doctors</h1>
          <p>Please select a doctor</p>
        </div>
        <DoctorsIndex canDelete />
      </main>
    </div>
  );
}

export default DeleteDoctors;
