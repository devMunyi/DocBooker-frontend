import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDoctors } from '../Redux/reducers/allDoctors';
// eslint-disable-next-line import/no-named-as-default
import NavBar from '../components/NavBar';
import DoctorsIndex from '../components/DoctorsIndex';
import './css/doctor_page.css';

function Doctors() {
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem('user'));

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
        <DoctorsIndex />
      </main>
    </div>
  );
}
export default Doctors;
