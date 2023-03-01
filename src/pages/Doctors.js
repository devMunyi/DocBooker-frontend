import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../Redux/reducers/allDoctors';

import NavBar from '../components/NavBar';
import DoctorsIndex from '../components/DoctorsIndex';

function Doctors() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(fetchDoctors(user.username));
  }, []);

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
