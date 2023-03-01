import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD:src/components/DoctorDetails.js
import 'react-datepicker/dist/react-datepicker.css';
import './css/doctor_details.css';

function DoctorDetails({ doctor }) {
  return (
    <div className="doctor-details">
      <div className="doctor-details__header">
        <h2>{doctor.name}</h2>
=======
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { doctorAdded } from '../Redux/reducers/selectedDoctor';

function DoctorCard({ doctor }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detailsUrl = '/doctors/1';

  const doctorSelected = async () => {
    dispatch(doctorAdded(doctor));
    navigate(detailsUrl);
  };

  return (
    <div className="doctor-details">
      <div className="doctor-details__header">
        <button type="button" onClick={doctorSelected} className="btn btn-success btn-sm">
          <h2>{doctor.name}</h2>
        </button>
>>>>>>> e56034d (Add logic to prevent navigation until user logs in):src/Components/DoctorCard.js
        <h3>{doctor.specialization}</h3>
      </div>
      <div className="doctor-details__body">
        <img src={doctor.photoUrl} alt="Doctor" />
        <p>{doctor.contact}</p>

        <div className="doctor-details__book-appointment">
          <button type="button">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

DoctorDetails.propTypes = {
  doctor: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DoctorDetails;
