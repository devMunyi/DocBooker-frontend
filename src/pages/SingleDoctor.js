/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../components/NavBar';
import DoctorDetails from '../components/DoctorDetails';
import './css/single_doctor_page.css';
import { fetchDoctor } from '../Redux/reducers/selectedDoctor';

function SingleDoctor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { doctorId } = useParams(); // get doctor's id from url
  const { selectedDoctor, status } = useSelector((state) => state.selectedDoctor);

  useEffect(() => {
    if (!selectedDoctor || selectedDoctor.id !== doctorId) {
      dispatch(fetchDoctor(doctorId));
    }
  }, []);

  if (status === 'failed' || status === 'succeeded') {
    if (Object.keys(selectedDoctor).length < 1) {
      toast.error('There was an error in getting the doctor\'s data');
      navigate('/');
    }
  }

  return (
    <div className="page">
      {
        selectedDoctor
        && (
        <>
          <NavBar />
          <main className="content single-doctor-page">
            <DoctorDetails doctor={selectedDoctor} />
          </main>
        </>
        )
      }
    </div>
  );
}

export default SingleDoctor;
